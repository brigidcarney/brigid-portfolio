# repoint brigidcarney.com DNS to Brigid's account

Michael runs this from his own machine, in Claude Code or Cline, after
Brigid's `/github-pages.md` has stopped at the domain step and she has sent
him the TXT record. It only touches Cloudflare and his own clone. GitHub
settings on her repo are hers and were done on her laptop.

Rules for the whole run:
- Show each change before making it and wait for an OK. Read-only checks
  can run straight away.
- Never ask for a token in the chat. If Claude Code's Cloudflare tools are
  connected, use those. Otherwise use `curl` with
  `-H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"`, a token Michael
  exports himself with **Zone → DNS → Edit** on brigidcarney.com only.
  Never echo it.
- If a step fails, show the error and stop.

## 0. Gather what's needed

Ask for:
- Brigid's GitHub username, kept as `NEW_OWNER`.
- The TXT record name and value she sent (the name starts with
  `_github-pages-challenge-`).

Check `gh api repos/NEW_OWNER/brigid-portfolio/pages --jq '{build_type, cname}'`
shows `workflow` and `brigidcarney.com`. If not, her side isn't finished:
say so and stop.

## 1. Look at the current records

Find the zone for brigidcarney.com and list its records as a short table
(type, name, content, proxied).

## 2. Repoint www

Change only the `www` CNAME's content to `NEW_OWNER.github.io`, with
proxying off (DNS only).

Leave the apex A records (`185.199.108–111.153`) and AAAA records
(`2606:50c0:8000–8003::153`) as they are; they're GitHub's shared Pages
addresses. If any of them is proxied, say so and offer to switch it to DNS
only, since the proxy can block GitHub's HTTPS certificate.

## 3. Add the verification record

Add a `TXT` record with the exact name and value Brigid sent. Then check it
resolves: `dig +short TXT <name>.brigidcarney.com`. Cloudflare usually
serves it within a minute.

## 4. Tidy up this clone

1. If `git remote get-url origin` still names `mmccomiskey`, point it at
   her repo: `git remote set-url origin git@github.com:NEW_OWNER/brigid-portfolio.git`
   and check with `git fetch origin`.
2. In `dns.txt`, change the `www` line to `NEW_OWNER.github.io.` and add the
   TXT record. Commit it on a branch and open a pull request on her repo
   rather than pushing to `main`.

## 5. Hand back to Brigid

Tell Michael DNS is done and that Brigid should run `/github-pages.md` again
on her laptop. It will verify the domain and turn on HTTPS.
