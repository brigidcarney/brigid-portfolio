# move the site to Brigid's GitHub account

Move `mmccomiskey/brigid-portfolio` to Brigid's own GitHub account and keep
brigidcarney.com live: transfer the repo, set up GitHub Pages on her side,
and repoint DNS in Cloudflare. Michael runs this from his own machine, not
Brigid's laptop. Claude Code can follow it too.

Rules for the whole run:
- Show each command before running it and wait for an OK on anything that
  changes GitHub or DNS. Read-only checks can run straight away.
- Never ask for a token or password in the chat. Tokens come from
  environment variables Michael sets himself.
- If a step fails, show the error and stop. Don't retry with different
  settings or guess at a fix.

## 0. Gather what's needed

Ask for Brigid's GitHub username and keep it as `NEW_OWNER`. Then check:

- `gh auth status` shows Michael signed in with the `repo` and `workflow`
  scopes.
- `CLOUDFLARE_API_TOKEN` is set (`test -n "$CLOUDFLARE_API_TOKEN"`). It needs
  **Zone → DNS → Edit** on brigidcarney.com only. If it's missing, tell
  Michael to create one at dash.cloudflare.com → My Profile → API Tokens and
  `export` it in his terminal, then stop until he says it's done.
- `main` has no unpushed commits (`git fetch origin` then
  `git status -sb`).

Save the current Pages settings so they can be compared later:
`gh api repos/mmccomiskey/brigid-portfolio/pages`.

## 1. Transfer the repo

Skip this if `gh api repos/NEW_OWNER/brigid-portfolio` already works.

1. Remind Michael to remove brigidcarney.com from his own verified domains
   (github.com/settings/pages) if it's listed. There's no API for it.
2. Start the transfer:
   `gh api -X POST repos/mmccomiskey/brigid-portfolio/transfer -f new_owner=NEW_OWNER`
3. Tell him Brigid must accept it from the email GitHub sends her, then add
   him as a collaborator with **Admin** access (her repo → Settings →
   Collaborators). Admin is needed for the Pages steps below. Wait until he
   says both are done, then confirm with
   `gh api repos/NEW_OWNER/brigid-portfolio --jq .permissions.admin`
   (should print `true`).
4. Point this clone at the new home:
   `git remote set-url origin git@github.com:NEW_OWNER/brigid-portfolio.git`
   and check with `git fetch origin`.

## 2. Set up GitHub Pages on her repo

1. Check whether Pages came across with the transfer:
   `gh api repos/NEW_OWNER/brigid-portfolio/pages`.
   - If it returns 404, create it:
     `gh api -X POST repos/NEW_OWNER/brigid-portfolio/pages -f build_type=workflow`
   - If `build_type` isn't `workflow`, fix it:
     `gh api -X PUT repos/NEW_OWNER/brigid-portfolio/pages -f build_type=workflow`
2. Set the custom domain:
   `gh api -X PUT repos/NEW_OWNER/brigid-portfolio/pages -f cname=brigidcarney.com`
3. Run a deploy:
   `gh workflow run deploy.yml -R NEW_OWNER/brigid-portfolio`, then watch
   it with `gh run watch -R NEW_OWNER/brigid-portfolio` and report whether it
   went green.

## 3. Repoint DNS in Cloudflare

If Cloudflare tools are already connected (Claude Code's Cloudflare MCP),
use those and skip the token. Otherwise use the Cloudflare API with `curl`
and `-H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"`. Never echo the token.

1. Find the zone id:
   `GET https://api.cloudflare.com/client/v4/zones?name=brigidcarney.com`
2. List the records:
   `GET .../zones/ZONE_ID/dns_records?per_page=100` and show them as a short
   table (type, name, content, proxied).
3. Change only the `www` CNAME: `PATCH .../dns_records/RECORD_ID` with
   `{"content":"NEW_OWNER.github.io","proxied":false}`.
4. Leave the apex A records (`185.199.108–111.153`) and AAAA records
   (`2606:50c0:8000–8003::153`) as they are. They're GitHub's shared Pages
   addresses. If any of them is proxied (orange cloud), say so and offer to
   switch it to DNS only, since the proxy can block GitHub's HTTPS
   certificate.
5. Domain verification: ask Michael to have Brigid open
   github.com/settings/pages → **Add a domain** → `brigidcarney.com` and
   read out the TXT record name and value it shows (the name looks like
   `_github-pages-challenge-NEW_OWNER`). Add it with
   `POST .../dns_records` as a `TXT` record, then tell her to click
   **Verify**.

## 4. Turn on HTTPS

Check `gh api repos/NEW_OWNER/brigid-portfolio/pages --jq .https_certificate.state`.
Once it says `approved`, run
`gh api -X PUT repos/NEW_OWNER/brigid-portfolio/pages -F https_enforced=true`.
If it isn't approved yet, say that the certificate can take up to an hour
and that this step can be rerun later.

## 5. Tidy up and check

1. In `dns.txt`, change the `www` line to `NEW_OWNER.github.io.` Commit it
   on a branch and open a pull request on her repo rather than pushing to
   `main`.
2. Check both addresses respond:
   `curl -sI https://brigidcarney.com | head -1` and
   `curl -sI https://www.brigidcarney.com | head -1`.
3. Finish with a short summary: what changed on GitHub, what changed in
   Cloudflare, and anything still waiting (HTTPS, domain verification).
