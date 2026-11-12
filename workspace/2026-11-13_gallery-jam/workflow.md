# Skills & working with this project

The twenty original project skills are preserved in this fork under `.agents/skills/`, with complete Claude copies in `.claude/skills/`. They are local instructions; they are not globally installed, and do not connect an engine or authorize paid generation by themselves.

## Recommended sequence for Galeri

| Work | Project skill | A useful deliverable |
| --- | --- | --- |
| Keep this hub up to date | `workspace-authoring` | Add real captures, decisions and checks to the existing Galeri card. |
| Define the next small milestone | `plan`, `feature-handoff` | A bounded, reviewable Unreal task based on the accepted design. |
| Block out two spaces | `game-level-design` | Gallery and ceremony scale, local movement limits, and visibility checks. |
| Choose a character production path | `3d-production-routing`, `character-sheet-pipeline` | Approved silhouettes and modeling references, before generating final assets. |
| Stage the ceremony | `blender-game-animation`, `game-animation-integration` | Standing, walking, throwing, guarding and collapse motions on a shared timeline. |
| Implement mind view and deductions | `game-ui-workflow` | Freeze/select/thought nodes, statement selection and answer confirmation. |
| Build readable sound cues | `game-audio-workflow` | Crossbow and crowd cues with stable event timing. |
| Verify the actual game | `gameplay-visual-review` | Native engine captures and a playable build, with observed results. |

Use `image-reference-workflow`, `materials-to-game`, `motion-reference-workflow` and `game-vfx-workflow` when those specific tasks are needed. Providers such as fal.ai or Higgsfield remain optional; use the owner's selected tools and budget.

## Daily workflow

1. Read the **Design** tab before changing mechanics.
2. Read the relevant skill's full `SKILL.md` and any resources it requires.
3. Update the existing character or production card, keeping stable entry IDs.
4. Put new media in this project's `media/` directory, with its source and license record.
5. Label concept art, diagrams and actual engine captures distinctly.
6. Update the registry date and record what was verified.
7. Add a dated milestone to **Dev log** (`devlog.html`) after meaningful progress. Keep stable IDs, an area and kind, the observed result and an evidence link. Never invent hours or durations. Pending work belongs in the production board, not completed milestones. Update the overview count when adding entries; filtering and ordering use the authored dates.

## Browser preview versus desktop editing

This initial setup uses the upstream browser preview. It displays the Workspace, reports and cards while Codex edits their local source files. **Manual card editing and image import in the UI require the authenticated desktop app.** Managed chat terminals, voice, phone access and new MCP connections are not enabled by this setup.

The native desktop application can be added later if direct card editing is wanted. The project content format stays the same.

## Maintain the fork

- Preserve the root `LICENSE` and `THIRD_PARTY_NOTICES.md`.
- Keep bundled third-party skill licenses, including `img2threejs` (Apache-2.0).
- Commit project content and sources. Keep credentials, private transcripts and job receipts local.
- The public fork contains the game's design solution; this is an authoring workspace, not a spoiler-free player page.

Workspace base: [witnesstodark/mr-mak-workspace](https://github.com/witnesstodark/mr-mak-workspace). Fork: [devrankrgz/mr-mak-workspace](https://github.com/devrankrgz/mr-mak-workspace).
