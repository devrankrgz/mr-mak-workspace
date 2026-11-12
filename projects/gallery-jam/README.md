# Galeri — project entry point

The owner approved a compact detective game for the 2026 Epic AI MegaJam. This repository contains the visual development workspace, not a playable Unreal project.

Start with [the design](../../workspace/2026-11-13_gallery-jam/design.md). The complete project card is registered as `gallery-jam` in `workspace/workspace.json`.

- [Visual brief](../../workspace/2026-11-13_gallery-jam/index.html)
- [Character board](../../workspace/2026-11-13_gallery-jam/characters.card.json)
- [Production board](../../workspace/2026-11-13_gallery-jam/production.card.json)
- [Skills and workflow](../../workspace/2026-11-13_gallery-jam/workflow.md)

Preserve the agreed truth (accidental choking on a grape), limited movement, the single shared event, mind reading once per visit with only the king excluded, and full progress reset on a confirmed incorrect answer. Treat exact camera placements, names, thought texts and diagrams as proposals unless the owner approves them.

Run the upstream browser preview with Node.js 22.20+ using `npm ci --ignore-scripts` followed by `npm run dev -- --host 127.0.0.1`. Open `http://127.0.0.1:3009/#/gallery-jam/0`. The browser can view cards; native manual card editing needs the desktop app. To build desktop later, follow `docs/getting-started.md` and install its separate service dependencies.
