

const tempoDisplay = () => document.querySelector('.tempo')
const tempoText = () => document.querySelector('.tempo-text')
const decreaseMetBtn = () => document.querySelector('.decrease-tempo')
const increaseMetBtn = () => document.querySelector('.increase-tempo')
const tempoRange = () => document.querySelector('.tempo-slider')
const startStopBtn = () => document.querySelector('.start-stop-button')
const StopBtn = () => document.querySelector('.stop-button')


const hi = new Audio('sounds/metronome_samples/hi.wav')
const low = new Audio("sounds/metronome_samples/low.wav")


let bpm = 100
let metMarking = 'Moderato'

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
    tempoDisplay().textContent = bpm
    tempoRange().value = bpm
    setMetMarking()
})

decreaseMetBtn().addEventListener('click', () => {
    if (bpm <= 20) {return}
    bpm--
    tempoDisplay().textContent = bpm
    tempoRange().value = bpm
    setMetMarking()
})

increaseMetBtn().addEventListener('click', () => {
    if (bpm >= 250) {return}
    bpm++
    tempoDisplay().textContent = bpm
    tempoRange().value = bpm
    setMetMarking()
})


startStopBtn().addEventListener('click', () => {
    const click = new Timer(() => {hi.play()}, 60000 / bpm, true)
    
    click.start()
})


