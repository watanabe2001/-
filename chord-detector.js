let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let chords = {
  // C Major
  'C': ['C', 'E', 'G'],
  // C Minor
  'Cm': ['C', 'D#', 'G'],
  // C# Major
  // ...
};

let chordNames = {
  "C": "ド長三和音",
  "Cm": "ド短三和音",
  // ...
}

let clickedNotes = [];

function noteClicked(note) {
  clickedNotes.push(note);
  let chordName = getChordName(clickedNotes);
  if (chordName) {
    console.log(chordNames[chordName]);
    clickedNotes = [];
  }
}

function getChordName(notes) {
  for (let chordName in chords) {
    let chordNotes = chords[chordName];
    if (arraysEqual(notes.sort(), chordNotes.sort())) {
      return chordName;
    }
  }
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', () => {
    let note = key.getAttribute('data-note');
    noteClicked(note);
  });
});