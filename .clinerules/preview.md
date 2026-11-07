# keep the preview handy

Brigid checks each change in her browser at http://localhost:5174, next to
this chat. Cline has no built-in browser, so help her keep that page working.

- Before the first change in a task, check whether the preview is up:
  `curl -s -o /dev/null -w "%{http_code}" http://localhost:5174`
  (200 means it's running). If it isn't, ask once: "The preview isn't
  running. Want me to start it so you can watch the change?"
- On a yes, run `npm run dev -- --port 5174 --strictPort`, leave it running,
  and tell her to open http://localhost:5174 in her browser.
- If it won't start because port 5174 is busy, an old preview is stuck.
  Say so in one line, stop it with `lsof -ti tcp:5174 | xargs kill`, and
  start it again.
- After finishing a change, end with one line that points her to it and
  says where to look, e.g. "Done. Here's the preview:
  http://localhost:5174, in the pilates section."
- If she says no to starting it, don't ask again in this task. Just say
  what changed.
