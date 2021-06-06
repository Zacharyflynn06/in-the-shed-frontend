// timer

class Timer{
    constructor(callback, interval, options) {

        this.interval = interval
        this.callback = callback
        this.options = options
        
        this.start = () => {
            this.expectedTime = Date.now() + this.interval
            
            if (this.options) {
                callback()
            }

            this.timeout = setTimeout(this.cycle, this.interval)
        }

        this.cycle = () => {
            const drift = Date.now() - this.expectedTime
            callback()
            this.expectedTime += this.interval
            // console.log(drift)
            // console.log(this.interval - drift )
            this.timeout = setTimeout(this.cycle, this.interval - drift)
        }

        this.stop = () => {
            clearTimeout(this.timeout)
            // console.log("stop")
        }
    }
}


















const tempoDisplay = () => document.querySelector('.tempo')
const tempoText = () => document.querySelector('.tempo-text')
const decreaseMetBtn = () => document.querySelector('.decrease-tempo')
const increaseMetBtn = () => document.querySelector('.increase-tempo')
const tempoRange = () => document.querySelector('.tempo-slider')
const startStopBtn = () => document.querySelector('.start-stop-button')
const StopBtn = () => document.querySelector('.stop-button')



const hi = new Audio('sounds/metronome_samples/hi.wav')
const low = new Audio("sounds/metronome_samples/low.wav")

let isRunning = false
let bpm = 120
let metMarking = 'Moderato'

const setMetMarking = () => {
    
    clickTrack.interval = 60000/bpm
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
    if (!isRunning) {
        clickTrack.start()
        isRunning = true
        startStopBtn().innerText = 'STOP'
    } else {
        clickTrack.stop()
        isRunning = false
        startStopBtn().innerText = 'START'
    }
})

const startClick = () => {
    hi.play()
    hi.currentTime = 0
}
let clickTrack = new Timer(startClick, 60000/bpm, true)





