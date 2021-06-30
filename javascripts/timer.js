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
            this.timeout = setTimeout(this.cycle, this.interval - drift)
        }

        this.stop = () => {
            clearTimeout(this.timeout)
        }
    }
}



