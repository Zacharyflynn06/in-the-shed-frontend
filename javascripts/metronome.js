const tempoDisplay = () => document.querySelector('.tempo')
const tempoText = () => document.querySelector('.tempo-text')
const decreaseMetBtn = () => document.querySelector('.decrease-tempo')
const increaseMetBtn = () => document.querySelector('.increase-tempo')
const tempoRange = () => document.querySelector('.tempo-slider')
const startStopBtn = () => document.querySelector('.start-stop-button')

let bpm = 200

tempoRange().addEventListener('input', () => {
    bpm = tempoRange().value
    tempoDisplay().textContent = bpm
})

decreaseMetBtn().addEventListener('click', () => {
    if (bpm <= 20) {return}
    bpm--
    tempoDisplay().textContent = bpm
    tempoRange().value = bpm
} )

increaseMetBtn().addEventListener('click', () => {
    if (bpm >= 300) {return}
    bpm++
    tempoDisplay().textContent = bpm
    tempoRange().value = bpm
} )