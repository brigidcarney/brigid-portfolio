# set up GitHub Pages on Brigid's account

Run this on Brigid's laptop, signed in as Brigid, after the repo has been
transferred to her and `/setup.md` has finished. It makes her repo publish
brigidcarney.com, then hands the DNS part to Michael. Run it again after
Michael says DNS is done: it skips what's finished and does the last steps.

Talk to Brigid in short, plain sentences and say what each step is for.
Never ask for a password or code in the chat; anything like that happens in
her browser. Check each step's current state first and skip it if it's
already done. If a command fails, explain it in plain words and stop.

## 1. GitHub's command-line tool

Run `gh --version`.

- If it's missing, run `brew --version`. With Homebrew, run
  `brew install gh`. Without it, run `open https://cli.github.com`, ask her
  to download the macOS installer and run it, then check `gh --version`
  again in a new terminal.

Run `gh auth status`. If she isn't signed in, run
`gh auth login --web --git-protocol https` and tell her a code will appear
here and a browser page will open: she types the code there and approves.

Check `gh api user --jq .login` and keep it as `OWNER`.

## 2. Check this is her repo

Run `gh repo view --json nameWithOwner --jq .nameWithOwner`. It should be
`OWNER/brigid-portfolio`. If it still says `mmccomiskey/...`, the transfer
hasn't been accepted yet: tell her to look for GitHub's email and accept
it, then stop.

## 3. Let Michael keep helping

Check `gh api repos/OWNER/brigid-portfolio/collaborators/mmccomiskey`
(no error means he's already in). If not, invite him:
`gh api -X PUT repos/OWNER/brigid-portfolio/collaborators/mmccomiskey`
and tell her Michael needs to accept the invite from his email.

## 4. Turn on publishing

1. Run `gh api repos/OWNER/brigid-portfolio/pages`.
   - If it returns 404, create it:
     `gh api -X POST repos/OWNER/brigid-portfolio/pages -f build_type=workflow`
   - If `build_type` isn't `workflow`:
     `gh api -X PUT repos/OWNER/brigid-portfolio/pages -f build_type=workflow`
2. If `cname` isn't `brigidcarney.com`:
   `gh api -X PUT repos/OWNER/brigid-portfolio/pages -f cname=brigidcarney.com`
3. Publish once: `gh workflow run deploy.yml`, then
   `gh run watch $(gh run list --workflow deploy.yml --limit 1 --json databaseId --jq '.[0].databaseId')`.
   Tell her whether it finished cleanly.

## 5. Prove the domain is hers

Run `open https://github.com/settings/pages`. Ask her to click **Add a
domain**, type `brigidcarney.com` and continue. GitHub then shows a TXT
record: a name that starts with `_github-pages-challenge-` and a value.

Tell her to send both to Michael exactly as shown (a text is fine) and
leave that page open. **Stop here** until Michael says DNS is done.

## 6. After Michael finishes DNS

When this workflow runs again and steps 1–4 are already done:

1. Ask her to go back to github.com/settings/pages and click **Verify**
   next to brigidcarney.com.
2. Check the certificate:
   `gh api repos/OWNER/brigid-portfolio/pages --jq .https_certificate.state`.
   - If it says `approved`, turn on HTTPS:
     `gh api -X PUT repos/OWNER/brigid-portfolio/pages -F https_enforced=true`
   - If not, tell her it can take up to an hour and to run `/github-pages.md`
     again later.
3. Check both addresses answer:
   `curl -sI https://brigidcarney.com | head -1` and
   `curl -sI https://www.brigidcarney.com | head -1`.
4. Tell her the site now publishes from her own account, and that she can
   make changes by asking Cline in plain words.
