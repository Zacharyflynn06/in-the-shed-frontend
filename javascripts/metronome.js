class Metronome {
    
    static setMetMarking = () => {
    
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
    
    static updateTempo = () => {
        bpmDisplay().innerHTML = bpm
        this.setMetMarking()
        clickTrack.interval = 60000/bpm
        
    }
    
    static changeMetByRange = () => {
        bpm = tempoRange().value
        this.updateTempo()
    }
    
    static decreaseMetronome = () => { 
        if (bpm <= 30) {return}
        bpm--
        tempoRange().value = bpm
        this.updateTempo()
    }
    
    static increaseMetronome = () => {
        if (bpm >= 250) {return}
        bpm++
        tempoRange().value = bpm
        this.updateTempo()
    }

    static createTempo = () => {

        if(currentSong !== ""){
            topNum = currentSong.time_signature.split("/")[0]
        } else {
            topNum = timeSig().value.split("/")[0]
        }

        for(let i = 1; i <= topNum; i++) {
            if( i===1 ){
                beatsPerBar.push(1)
            } else {
                beatsPerBar.push(0)
            }
        }
    }
    static startMetronome = () => {
        beatsPerBar = []
        clickCount = 0
        measureCounter = 1
        cl = 0
        Metronome.createTempo()
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


    
}


