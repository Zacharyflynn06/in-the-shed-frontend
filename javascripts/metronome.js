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

const startClick = () => {
    hi.play()
    hi.currentTime = 0
}

document.addEventListener("DOMContentLoaded", () => {
    decreaseMetBtn().addEventListener('click', decreaseMetronome)
})

let clickTrack = new Timer(startClick, 60000/bpm, true)
