// document.addEventListener("DOMContentLoaded", function() {
//     startStopBtn().addEventListener('click', function(){hi.play()})
// })


// function Timer(callback, timeInterval) {
//     this.timeInterval = timeInterval

//     this.start = () => {
//         this.expected = Date.now() + this.timeInterval;
//         this.timeout = setTimeout(this.round, this.timeInterval);
//         console.log('started')
//     }

//     this.stop = () => {
//         clearTimeout(this.timeout)
//         console.log("stoped")
//     }

//     this.round = () => {
//         let drift = Date.now() - this.expected
//         callback()
//         this.expected += this.timeInterval
//         console.log(drift)
//     }
// }

class Timer{
    constructor(callback, interval) {

        this.interval = interval
        this.callback = callback

        this.start = () => {
            this.expectedTime = Date.now() + this.interval
            this.timeout = setTimeout(this.cycle, this.interval)
            console.log("started")
        }

        this.cycle = () => {
            const drift = Date.now() - this.expectedTime
            this.expectedTime += this.interval
            console.log("drift", drift)
        }

        this.stop = () => {
            clearTimeout(this.timeout)
            console.log("stop")
        }
    }
}

const myTimer = new Timer(() => {console.log("it works")}, 1000)
myTimer.start()
