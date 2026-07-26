# Piano App

An app that helps you learn to sight-read music

## App Properties

- html / css / js - based app
- programming with VS Code and OpenCode
- version control via GitHub
- the app uses the Web-MIDI-API to connect a MIDI keyboard
  - selecting the correct MIDI device from the drop-down menu
- the app uses OpenSheetMusicDisplay (OSMD) to open and display sheet music in MusicXML format
  - loaded via file picker (no drag-and-drop)
- optimized for Full HD resolution (1920x1080)
- optimized for Google Chrome
- launch in Kiosk mode, if possible
- an interactive 88-key piano keyboard is displayed at the bottom of the screen
- supports chords (several notes played simultaneously)
- piano Key Colors (white/black)
  - ivory / black for standard condition
    - pressed keys should be clearly indicated
  - light red / dark red for incorrectly played notes 
  - light blue / dark blue for correctly played notes in the left hand
  - light green / dark green for correctly played notes in the right hand
- piano key colors assignable over js not css
- css as simple as possible
- app settings appear in the top bar 
  - switch between wait mode (default) and play-along mode (drop-down)
  - tempo (100%, 75%, 50%, 25%), only active in play-along mode
  - checkboxes for left and right hand
  - bar range select (start / end number inputs), to practice a specific section on repeat
  - Piano Keys Help (key colors) enable/disable
- cursor in the music sheet
- color indication in the music sheet
- no waterfall just musical notation
- no scoring just showing mistakes
- no audio output; the sound comes from the piano itself
- live server over VS Code at the beginning
- launch over GitHub Pages later

## Plan

### Stage 1 — Scaffold & Static Piano
*Deliverable: on-screen 88-key piano renders at the bottom of the page.*
- [ ] Create `index.html`, `style.css`, `app.js` skeleton
- [ ] Generate 88-key piano via JS (white/black keys, correct layout)
- [ ] Key coloring via JS (ivory/black default; pressed indication)
- [ ] Responsive layout for Full HD (1920×1080), piano fixed at bottom
- [ ] Verify with VS Code Live Server
- [ ] Commit: `git add -A && git commit -m "Stage 1: scaffold + static piano"`

### Stage 2 — MIDI Input
*Deliverable: connecting a MIDI keyboard lights up on-screen keys; chords work.*
- [ ] MIDI device enumeration + dropdown selector
- [ ] MIDI note-on / note-off event handling
- [ ] Map MIDI note numbers to on-screen piano keys
- [ ] Light up pressed keys from MIDI input; dim on release
- [ ] Chord support (simultaneous note events in the same tick)
- [ ] Commit: `git add -A && git commit -m "Stage 2: MIDI input"`

### Stage 3 — Sheet Music Rendering
*Deliverable: load a MusicXML file via file picker and see it rendered above the piano.*
- [ ] Load OSMD from CDN
- [ ] File picker button (no drag-and-drop)
- [ ] Render MusicXML into a `<div>` above the piano
- [ ] Layout: top bar area → sheet music → piano
- [ ] Commit: `git add -A && git commit -m "Stage 3: sheet music rendering"`

### Stage 4 — Settings Bar
*Deliverable: top bar with all controls functional (but modes not yet wired to note matching).*
- [ ] Wait / play-along mode dropdown (wait = default)
- [ ] Tempo selector (100%, 75%, 50%, 25%) — grayed out in wait mode
- [ ] Left / right hand checkboxes
- [ ] Bar range start / end number inputs
- [ ] Key-color help toggle (shows/hides legend)
- [ ] Styling for the top bar
- [ ] Commit: `git add -A && git commit -m "Stage 4: settings bar"`

### Stage 5 — Cursor & Sheet Coloring
*Deliverable: cursor advances through the sheet; notes in the sheet are colored to match correctness.*
- [ ] Track current position in the loaded MusicXML
- [ ] Render a cursor/indicator on the current measure in OSMD
- [ ] Color notes in the sheet using OSMD coloring API
- [ ] Reset cursor on file load or bar range change
- [ ] Commit: `git add -A && git commit -m "Stage 5: cursor + sheet coloring"`

### Stage 6 — Modes & Note Matching
*Deliverable: wait mode and play-along mode work with correct/incorrect visual feedback on piano + sheet.*
- [ ] **Wait mode**: advance cursor only when the user plays the correct note(s); show red on mistake
- [ ] **Play-along mode**: auto-advance cursor at the selected tempo; color user's notes blue/green (correct) or red (wrong) relative to the sheet
- [ ] Wait for correct note before advancing in wait mode
- [ ] Hand filtering: ignore notes for un-checked hands when matching
- [ ] Piano key colors: blue (left correct), green (right correct), red (incorrect), dimmed for un-checked hands
- [ ] Sheet note colors mirror the piano key colors
- [ ] Bar range loop: only play / evaluate within the selected range
- [ ] Commit: `git add -A && git commit -m "Stage 6: modes + note matching"`

### Stage 7 — Polish, Errors & Deploy
*Deliverable: production-ready app with proper edge-case handling.*
- [ ] Empty state: prompt to load MusicXML and connect MIDI
- [ ] Error handling: OSMD parse failure, MIDI connection lost, no device found
- [ ] MIDI device disconnected → fall back gracefully (show warning)
- [ ] Full HD / Kiosk mode layout verification
- [ ] GitHub Pages deployment prep (relative paths, no Live Server dependency)
- [ ] Commit: `git add -A && git commit -m "Stage 7: polish, errors, deploy"`