const playChord = (root, family, chord) => {
    const newChord = new Audio(`sounds/chords/${root}/${family}/${chord}.wav`)
    newChord.play()
}

