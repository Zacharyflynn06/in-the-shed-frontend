// click samples

const hi = new Audio('sounds/metronome_samples/hi.wav')
const low = new Audio("sounds/metronome_samples/low.wav")




// song
const songContainer = () => document.querySelector('.song-container')
const loadSongBtn = () => document.querySelector('.load-button')
const songHeader = () => document.querySelector('.song-header')
const songTitle = () => document.querySelector('.song-title')

let isPlaying = false


// Nav-bar

const hamburgerBtn = () => document.querySelector('.hamburger-button')
const navBar = () => document.querySelector('#nav-container')
const createUserBtn = () => document.querySelector('.create-user-button')
const userLoginField = () => document.querySelector('.user-login-field')
const userLoginFieldLabel = () => document.querySelector('.user-login-label')
const usernameDisplay = () => document.querySelector('.username')
const songListUl = () => document.querySelector('.song-list')
const songListContainer = () => document.querySelector('.song-list-container')

const loginContainer = () => document.querySelector('.login-container')

// flash

const flash = () => document.querySelector("#flash")

// metronome + timer
const bpmDisplay = () => document.querySelector('.tempo')
const tempoText = () => document.querySelector('.tempo-text')
const decreaseMetBtn = () => document.querySelector('.decrease-tempo')
const increaseMetBtn = () => document.querySelector('.increase-tempo')
const tempoRange = () => document.querySelector('.tempo-slider')
const startButton = () => document.querySelector('.start-stop-button')



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



let isRunning = false
let bpm = 120
let metMarking = 'Moderato'
let clickCount = 0
let topNum = timeSig().value.split("/")[0]
let bottomNum = timeSig().value.split("/")[1] 
let beatsPerBar = []
let measureCount = 1
