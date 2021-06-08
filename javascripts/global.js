// click samples

const hi = new Audio('sounds/metronome_samples/hi.wav')
const low = new Audio("sounds/metronome_samples/low.wav")

// song container
const songContainer = () => document.querySelector('.song-container')

// metronome
const bpmDisplay = () => document.querySelector('.tempo')
const tempoText = () => document.querySelector('.tempo-text')
const decreaseMetBtn = () => document.querySelector('.decrease-tempo')
const increaseMetBtn = () => document.querySelector('.increase-tempo')
const tempoRange = () => document.querySelector('.tempo-slider')
const startButton = () => document.querySelector('.start-stop-button')

let isRunning = false
let bpm = 120
let metMarking = 'Moderato'

// form builder
const createMeasureBtn = () => document.querySelector('.measure-button')
const measureField = () => document.querySelector('.measure-field')
const measuresContainer = () => document.querySelector('.measures-container')
const card = () => document.querySelector('.card')
const nextBtn = () => document.querySelector('.next-btn')
const backBtn = () => document.querySelector('.back-btn')
const timeSig = () => document.querySelector('.time-sig-field')
const timeSigContainer = () => document.querySelector('time-signiture-container')

// chord builder
const createChordBtn = () => document.querySelector('.create-chord-button')
const rootNote = () => document.querySelector('.root-note')
const rootType = () => document.querySelector('.root-type')
const chordQuality = () => document.querySelector('.chord-quality')
const chordContainer = () => document.querySelector('.chord-container')
// const fullChord = () => document.querySelector('.full-chord')
