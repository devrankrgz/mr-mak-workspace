# Galeri — Game design

**Working title:** Galeri. The final title has not been chosen.  
**Project:** Enlyf Games · 2026 Epic AI MegaJam · Director’s Cut  
**State:** Agreed design recorded; Unreal gameplay implementation has not started.  
**Source:** The owner's design discussion, consolidated 12–13 November 2026.

## The experience

A compact detective game developed from a shelved Gallery idea in Project Mind. A skeletal-headed king sits on a throne in a grand white marble gallery. Four paintings hang on each side. The eight paintings show the same fatal ceremony from different viewpoints.

The player enters a painting, observes the event from a bounded area, reads a character's thoughts, and returns to choose what they believe happened. Different perspectives inform the player's deduction; the game does not prescribe a clue tour. The connection to Director’s Cut is the realization of a shelved idea and the reconsideration of one event through different views. No film-editing mechanic is required.

## Accepted game loop

1. Select any of the eight paintings; order and revisits are unrestricted.
2. Start the same event from that painting's position. Movement is limited to a local area, not a fixed camera and not free access to the full scene.
3. Watch approximately 1–2 minutes. Exact timing will be tuned through playtesting.
4. Optionally use mind reading once during this visit, on one character.
5. Return to the gallery when the event ends. A **What happened?** page opens.
6. Select observations and interpretations from a mixture of correct and incorrect statements. These choices unlock possible explanations for the king and may be revised on later returns.
7. Speak to the king whenever ready, including after the first painting visit. Choose and confirm one explanation.

No requirement to visit all paintings. No assigned clue or mandatory quest for each angle. The grape action must actually be visible from at least one suitable position, without glowing clues or automatic deductions.

## Ceremony and writer's truth — spoilers

The king's son is getting married. The king, royal family, bride's family and some state officials sit at a table on a raised platform. An open area separates the platform from standing guests.

1. The king stands up to give a speech.
2. Passing the table, he takes a grape.
3. Walking toward the front of the platform, he puts it in his mouth and it lodges in his throat.
4. At the same time, attackers rush from the crowd. A crossbow is heard and a knife is thrown toward him.
5. Guards intervene, surround him and walk him away. **They do not physically carry him.**
6. In the chaos, nobody notices he is choking or helps. He collapses and dies.

The actual cause is accidental choking on the grape. The attacks happen but do not cause his death. Scene timing serves the dramatic sequence and is not a medical simulation.

## Alternative explanations

- The thrown knife killed him.
- A crossbow bolt killed him.
- The queen poisoned his food. She has considered poisoning him, and his meals have been sent with her approval for some time. Her intention does not establish the cause of death.
- The aide poisoned the cup he filled.
- A count arranged the poisoning with the aide.
- A guard stabbed him from behind during the evacuation.
- He tripped and died while moving away.

The aide filling the cup is part of the proposed suspicion. The count's involvement and a guard's stabbing are **hypotheses**, not established events. Character names, exact motives, trajectories and final counter-evidence remain open.

## Mind world

- One use and one selected character per painting visit, for now.
- Freeze the event **and the visit timer**.
- Move the camera above the current area. Hide the ordinary environment; keep characters visible.
- Select a character in the accessible area and show 3–4 thoughts as connected organic nodes.
- **Only the king is unreadable.** Do not add immunity for other characters.
- Exit to the previous view and resume the same moment.

Prewritten thought groups indexed by event time are a proposed implementation. Thoughts describe the speaker's beliefs and knowledge rather than omniscient truth. Runtime LLMs and internet access are not required by the agreed concept. Node text, timing and input bindings are still to be authored. The Workspace node drawing uses placeholders, not final clues.

## The king's question

> How did I die, and who killed me?

This is the only question. No follow-up interrogation or free-text chat. Answer examples:

- You were shot with a crossbow.
- The queen killed you by poisoning your food.
- The aide poisoned your wine.
- The count arranged your poisoning with the aide.
- You fell and died while being escorted away.
- You choked on a grape. Nobody murdered you.

Selecting an answer opens a confirmation. Cancelling returns to the investigation. Warn clearly that committing to a wrong answer resets progress.

**Wrong:** show that the answer is incorrect, then reset visited-painting records, selected statements and unlocked answers. Return to the initial gallery state. No hidden persistent progress or limited retry count.

**Correct:** show success and finish. No additional endings or scoring system in scope.

## Implementation proposals, not additional approved scope

- Single-player Unreal Engine project, developed on Ubuntu with a Windows packaging/test pass using the same engine version.
- Replay a single controlled timeline; use staged motions rather than an autonomous crowd simulation.
- Boundaries, eight starting positions, transitions, crowd count and animations are to be decided through blockout.
- Keep statements from revealing unseen secret events. Final statement-to-answer mappings remain to be written.
- Make the king's unavailable mind visually understandable.
- Saving between sessions, early exit from paintings, fast-forward and added accessibility features have not been agreed as initial requirements.

## Out of scope

The full Mind game, co-op, an open world, player combat, changing the outcome of the ceremony, inventory economy, multiple endings and live conversation with the king.

## First acceptance checks

- All views show a consistent repeat of one event.
- Local movement cannot replace every other viewpoint.
- Time and timer pause together; mind reading excludes only the king and renews per visit.
- A new player can infer the actual death from observable actions.
- Answers can be attempted after one visit; confirm/cancel, full reset and success work.
- A packaged Windows build runs independently of the development tools.

## Jam delivery

Game text, meaningful speech, submission text and gameplay video must be English. Prepare a 30–60 second gameplay video, at least 1920×1080. The human participant performs the final submission. The recorded deadline is **16 November 2026, 04:59 Europe/Istanbul**. Check the jam page again before delivery.

Record sourced assets and their licenses as they enter the project. Mr. Mak Workspace is a development tool; its sample artwork is not used as game content here.

- [Jam page](https://itch.io/jam/2026-epic-ai-megajam)
- [Official English rules](https://epicgames.box.com/s/a7xcgl07fqoieeb99sjtd3juhj4agc4z)
- [Unreal MCP documentation](https://dev.epicgames.com/documentation/unreal-engine/unreal-mcp-in-unreal-editor)
