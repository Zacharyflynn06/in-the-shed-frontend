// document.addEventListener("DOMContentLoaded", function() {
//     startStopBtn().addEventListener('click', function(){hi.play()})
// })

class Timer{
    constructor(callback, interval) {
        this.interval = interval
        this.callback = callback
    }

    startTime() {
        console.log(this)
        this.expectedTime = Date.now() + this.interval
        this.timeout = setTimeout(this.round, this.interval)
        console.log("started")
    }

    stopTime() {
        clearTimeout(this.timeout)
        console.log("stop")
    }

    round() {
        this.callback
    }

}

const let timer = new Timer(() => {console.log("it works")}, 1000)
