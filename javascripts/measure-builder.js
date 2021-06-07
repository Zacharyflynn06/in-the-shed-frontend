// measure builder
const createMeasureBtn = () => document.querySelector('.measure-button')
const measureField = () => document.querySelector('.measure-field')

const renderMeasures = () => {
    
    const n = measureField().value

    for(let i=1; i <= n; i++) {
        console.log(i)
        const div = document.createElement("div")
        div.innerHTML = `${i}`
        div.className = `m${i}`
        div.style.gridArea = `m${i}`
        div.style.border = "1px black solid"
    
        songContainer().appendChild(div) 
    }

}

document.addEventListener("DOMContentLoaded", () => {
    createMeasureBtn().addEventListener('click', renderMeasures)
})