const playChord = (root, quality) => {

    switch(root){
        case "A#":
            root = "Bb"
            break
        case "B#":
            root = "C"
            break
        case "Cb":
            root = "B"
            break
        case "C#":
            root = "Db"
            break
        case "D#":
            root = "Eb"
            break
        case "E#":
            root = "F"
            break
        case "Fb":
            root = "E"
            break
        case "F#":
            root = "Gb"
            break
        case "G#":
            root = "Ab"
            break
    }

    const newChord = new Audio(`sounds/chords/${root}${quality}.wav`)
    newChord.play()
    newChord.currentTime = 0
}

