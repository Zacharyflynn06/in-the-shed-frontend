const setMetMarking = () => {

    if (bpm <= 40 ) {metMarking = "Grave"}
    if (bpm > 40 && bpm <= 60 ) {metMarking = "Largo"}
    if (bpm > 60 && bpm <= 66 ) {metMarking = "Larghetto"}
    if (bpm > 66 && bpm <= 72 ) {metMarking = "Adagio"}
    if (bpm > 72 && bpm <= 83 ) {metMarking = "Andante"}
    if (bpm > 83 && bpm <= 100 ) {metMarking = "Moderato"}
    if (bpm > 100 && bpm <= 120 ) {metMarking = "Allegretto"}
    if (bpm > 120 && bpm <= 156 ) {metMarking = "Allegro"}
    if (bpm > 156 && bpm <= 176 ) {metMarking = "Vivace"}
    if (bpm > 176 && bpm <= 200 ) {metMarking = "Presto"}
    if (bpm > 200) {metMarking = "Prestissimo"}

    tempoText().innerText = metMarking
}

const updateTempo = () => {
    bpmDisplay().innerHTML = bpm
    setMetMarking()
    clickTrack.interval = 60000/bpm

}

const changeMetByRange = () => {
    bpm = tempoRange().value
    updateTempo()
}

const decreaseMetronome = () => { 
    if (bpm <= 30) {return}
    bpm--
    tempoRange().value = bpm
    updateTempo()
}

const increaseMetronome = () => {
    if (bpm >= 250) {return}
    bpm++
    tempoRange().value = bpm
    updateTempo()
}

const startMetronome = () => {
    beatsPerBar = []
    clickCount = 0
    measureCounter = 1
    cl = 0
    createTempo()
    
    measuresInForm = chordStructure().length

    if (!isRunning) {
        clickTrack.start()
        isRunning = true
        startButton().value = 'Stop'
    } else {
        clickTrack.stop()
        isRunning = false
        startButton().value = 'Start'
    }
}


const createTempo = () => {
    topNum = timeSig().value.split("/")[0]
    for(let i = 1; i <= topNum; i++) {
        if( i===1 ){
            beatsPerBar.push(1)
        } else {
            beatsPerBar.push(0)
        }
    }
}




const startTime = () => {
    if(measureCounter === measuresInForm){
        measureCounter = 0
        // cl is chord locator
        cl = 0
    }

    if( clickCount === beatsPerBar.length) {
        clickCount = 0
        measureCounter ++
    }

    // sounds
    if (clickCount === 0) {
        console.log(`chord locator is ${cl}`)
        console.log(`measure number is ${measureCounter}`)

        if (chordStructure()[cl].dataset.life === "alive") {

            const currentChord = chordStructure()[cl]
            const root = currentChord.dataset.root
            const quality = currentChord.dataset.quality
            const soundFile = buildChordUrl(root, quality)
            const playChord = new Audio(soundFile)
            playChord.play()
    
            setTimeout(() => {
                playChord.pause()
            }, (60000/bpm) * beatsPerBar.length);
        }

        hi.play()            
        hi.currentTime = 0 

        cl++
    } else {
        low.play()
        low.currentTime = 0 
    }

    
    
    clickCount++
    
}

const clickTrack = new Timer(startTime, 60000/bpm, true)