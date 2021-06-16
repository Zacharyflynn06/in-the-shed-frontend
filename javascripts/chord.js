const playChord = (root, quality) => {

    // if(isPlaying !== false) {
    //     debugger
    //     isPlaying.stop()
    // }

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

    const newQuality = quality.replace("#", "sharp")
    console.log(newQuality)
    const newChord = new Audio(`sounds/chords/${root}/${root}${newQuality}.wav`)

    newChord.play()

    newChord.currentTime = 0
    
    // createChordBtn().addEventListener('click', newChord.pause())
}

