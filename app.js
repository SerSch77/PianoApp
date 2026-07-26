const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const WHITE_NOTES = new Set([0, 2, 4, 5, 7, 9, 11]);

const FIRST_MIDI = 21;
const LAST_MIDI = 108;
const TOTAL_WHITE = 52;

const COLORS = {
  whiteDefault: '#fffff0',
  blackDefault: '#1a1a1a',
  whitePressed: '#c8c0a8',
  blackPressed: '#777',
};

const keys = new Map();

function buildPiano() {
  const piano = document.getElementById('piano');
  const whiteContainer = document.createElement('div');
  whiteContainer.className = 'white-keys';

  const blackContainer = document.createElement('div');
  blackContainer.className = 'black-keys';

  let whiteIndex = 0;

  for (let midi = FIRST_MIDI; midi <= LAST_MIDI; midi++) {
    const noteIndex = midi % 12;
    const octave = Math.floor(midi / 12) - 1;
    const name = NOTE_NAMES[noteIndex] + octave;

    if (WHITE_NOTES.has(noteIndex)) {
      const key = document.createElement('div');
      key.className = 'white-key';
      key.dataset.midi = midi;
      key.dataset.note = name;
      key.style.backgroundColor = COLORS.whiteDefault;
      whiteContainer.appendChild(key);
      keys.set(midi, key);
      whiteIndex++;
    } else {
      const key = document.createElement('div');
      key.className = 'black-key';
      key.dataset.midi = midi;
      key.dataset.note = name;
      key.style.backgroundColor = COLORS.blackDefault;

      const gapPos = (whiteIndex / TOTAL_WHITE) * 100;
      key.style.left = `calc(${gapPos}% - 6px)`;

      blackContainer.appendChild(key);
      keys.set(midi, key);
    }
  }

  piano.appendChild(whiteContainer);
  piano.appendChild(blackContainer);
}

function resetKeyColor(key) {
  const midi = parseInt(key.dataset.midi);
  const noteIndex = midi % 12;
  const isWhite = WHITE_NOTES.has(noteIndex);
  key.style.backgroundColor = isWhite ? COLORS.whiteDefault : COLORS.blackDefault;
  key.style.boxShadow = 'none';
}

function pressKey(key) {
  const midi = parseInt(key.dataset.midi);
  const noteIndex = midi % 12;
  const isWhite = WHITE_NOTES.has(noteIndex);
  key.style.backgroundColor = isWhite ? COLORS.whitePressed : COLORS.blackPressed;
  key.style.boxShadow = isWhite ? 'inset 0 -2px 6px rgba(0,0,0,0.15)' : 'inset 0 -1px 4px rgba(255,255,255,0.15)';
}

function releaseKey(key) {
  resetKeyColor(key);
}

function onPointerDown(e) {
  const key = e.currentTarget;
  pressKey(key);
}

function onPointerUp(e) {
  const key = e.currentTarget;
  releaseKey(key);
}

function onPointerLeave(e) {
  const key = e.currentTarget;
  releaseKey(key);
}

function addKeyListeners() {
  for (const [, key] of keys) {
    key.addEventListener('pointerdown', onPointerDown);
    key.addEventListener('pointerup', onPointerUp);
    key.addEventListener('pointerleave', onPointerLeave);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buildPiano();
  addKeyListeners();
});
