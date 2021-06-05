let timeout



const startTest = () => {
    console.log('Started')
    console.log(this)
    const startTime = Date.now()
    let totalTime = 0
    const round = () => {
        timeout = setTimeout(() => {
            totalTime += 1000
            let elapsedTime = Date.now() - startTime
            console.log('Total Drift', elapsedTime - totalTime)
            round()
            }, 1000)
    }

    round()
}

const stopTest = () => {
    clearTimeout(timeout)
    console.log('Stopped')
}

document.addEventListener("DOMContentLoaded", function(){
    startTest()
})

// startStopBtn().addEventListener("click", startTest)