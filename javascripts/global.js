const hi = new Audio('sounds/metronome_samples/hi.wav')
const low = new Audio("sounds/metronome_samples/low.wav")


const bpmDisplay = () => document.querySelector('.tempo')
const tempoText = () => document.querySelector('.tempo-text')
const decreaseMetBtn = () => document.querySelector('.decrease-tempo')
const increaseMetBtn = () => document.querySelector('.increase-tempo')
const tempoRange = () => document.querySelector('.tempo-slider')
const startButton = () => document.querySelector('.start-stop-button')

let isRunning = false
let bpm = 120
let metMarking = 'Moderato'