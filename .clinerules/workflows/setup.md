# set up this laptop for editing the site

Get this computer ready for Brigid to edit brigidcarney.com through Cline.
She is not a developer: talk to her in short, plain sentences, one step at a
time, and say what each step is for before running it. Never ask her to type
a password into the chat. If a step needs her password or a click outside
VS Code, tell her exactly what to do and wait until she says it's done.

Run every check first and skip anything already set up. Don't install extra
tools, change global settings, or commit anything during setup.

## 1. Check git

Run `git --version`.

- If it works, move on.
- If macOS shows a pop-up offering to install "command line developer
  tools", tell her to click **Install**, wait for it to finish (it can take
  several minutes), then run `git --version` again.

## 2. Check Node

Run `node --version`.

- If it prints v20 or higher, move on.
- If it's missing or older, run `brew --version`.
  - If Homebrew exists, run `brew install node`.
  - If not, don't install Homebrew. Open https://nodejs.org in her browser
    (`open https://nodejs.org`), tell her to download the **LTS** installer
    for macOS, double-click it and follow the steps. When she says it's done,
    ask her to close and reopen VS Code's terminal, then check
    `node --version` again.

## 3. Set her name for saved changes

Run `git config --global user.name` and `git config --global user.email`.

- If both are set, move on.
- If either is empty, ask her for the name and the email on her GitHub
  account, then set them with `git config --global user.name "…"` and
  `git config --global user.email "…"`.

## 4. Check the connection to GitHub

Run `git fetch origin`.

- If it works, move on.
- If it asks for a sign-in or fails with an authentication error, tell her
  to click the **Accounts** icon (bottom left of VS Code) and choose
  **Sign in with GitHub**, then try `git fetch origin` again.

## 5. Install the site's building blocks

Run `npm install`. Tell her this downloads the pieces the site is built from
and can take a minute. If it fails, show her the last few lines of the error
in plain words and stop there; don't try to fix packages yourself.

## 6. Make sure the site builds

Run `npm run build`. If it fails, explain the error in plain words and stop.
Don't change any code during setup.

## 7. Start the preview

Run `npm run dev -- --port 5174` and leave it running. Then run
`open http://localhost:5174` so the site opens in her browser. Ask her to
confirm she can see her site.

## 8. Finish with a short how-to

Tell her, in a few lines:

- Setup is done.
- To make a change, type what she wants in the Cline chat in plain words,
  e.g. "change my pilates intro to …". She'll see each change and can
  approve or reject it.
- The preview at http://localhost:5174 updates as changes are made.
- Nothing goes live until she asks Cline to "publish my changes" (that
  commits and pushes to `main`, and the real site updates a few minutes
  later).
- In Cline's settings, under **Auto-approve**, it's safest to turn on
  **Read files** only, so every edit waits for her OK.
