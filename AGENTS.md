# Piano App — Agent Guide

This is a **pre-implementation** project. No code, dependencies, or tooling have been set up yet.

## Tech Stack (from spec)

- Vanilla HTML / CSS / JS — no framework
- Web-MIDI-API for MIDI keyboard input
- OpenSheetMusicDisplay (OSMD) for MusicXML sheet music rendering
- Target: Google Chrome, Full HD (1920×1080), Kiosk mode
- No audio output — sound comes from the piano itself
- No scoring — only mistake indication

## Key Conventions (from spec)

- Piano key colors via JS, not CSS (ivory/black default, colored per correctness)
- CSS kept as simple as possible
- MusicXML loaded via file picker (no drag-and-drop)
- 88-key on-screen piano with chord support
- Top bar settings: wait mode (default) / play-along mode, tempo, hand checkboxes, bar range (start/end number inputs), key-color help toggle
- Cursor in the music sheet + color indication in the sheet
- Musical notation (not waterfall)
- Live server via VS Code initially; GitHub Pages later

## Implementation Stages

The project is planned in 7 sequential stages (see `PianoApp.md`):

| Stage | What it delivers |
|-------|-----------------|
| 1 | HTML skeleton + 88-key static piano rendered via JS |
| 2 | MIDI input — keys light up from keyboard, chords work |
| 3 | OSMD sheet music rendering + file picker |
| 4 | Top-bar settings (modes, tempo, hands, bar range, help) |
| 5 | Cursor + note coloring in the sheet music |
| 6 | Wait / play-along mode logic with correct/incorrect feedback |
| 7 | Error/empty states, edge-case polish, GitHub Pages prep |

## Build / Test / Lint

None configured yet. The first meaningful step is to scaffold the project (Stage 1).
