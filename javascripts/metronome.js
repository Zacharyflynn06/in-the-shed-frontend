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

tempoRange().addEventListener('input', () => {
    bpm = tempoRange().value
    bpmDisplay().textContent = bpm
    setMetMarking()
    clickTrack.interval = 60000/bpm
})

const decreaseMetronome = () => { 
    if (bpm <= 20) {return}
    bpm--
    bpmDisplay().textContent = bpm
    tempoRange().value = bpm
    setMetMarking()
    clickTrack.interval = 60000/bpm
}

increaseMetBtn().addEventListener('click', () => {
    if (bpm >= 250) {return}
    bpm++
    bpmDisplay().textContent = bpm
    tempoRange().value = bpm
    setMetMarking()
    clickTrack.interval = 60000/bpm
})

startButton().addEventListener('click', () => {
    clickCount = 0
    if (!isRunning) {
        clickTrack.start()
        isRunning = true
        startButton().value = 'Stop'
    } else {
        clickTrack.stop()
        isRunning = false
        startButton().value = 'Start'
    }
})







let measure = []

const createTempo = () => {
    let topNum = timeSig().value.split("/")[0]
    let bottomNum = timeSig().value.split("/")[1]   
    
    for(i = 1; i <= topNum; i++) {
        if(i===1){
            measure.push(`${i}`)
        } else {
            measure.push("0")
        }
    }
}

const startTime = () => {
    for(let i = 1; i <= measure.length; i++ ){
        debugger
        if(measure[i] === 1){
            console.log(i)
            hi.play()
            hi.currentTime = 0
        } else {
            console.log("not i")
            low.play()
            low.currentTime = 0
        }
    }
}

const clickTrack = new Timer(startTime, 60000/bpm, true)