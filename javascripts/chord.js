const playChord = (chord) => {
    const newChord = new Audio(`sounds/chords/${chord}.wav`)
    newChord.play()
    newChord.currentTime = 0
}

