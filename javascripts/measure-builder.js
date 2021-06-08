// measure builder
const createMeasureBtn = () => document.querySelector('.measure-button')
const measureField = () => document.querySelector('.measure-field')
const measuresContainer = () => document.querySelector('.measures-container')
const card = () => document.querySelector('.card')
const nextBtn = () => document.querySelector('.next-btn')
const backBtn = () => document.querySelector('.back-btn')

const renderMeasures = () => {
    
    const n = measureField().value

    measuresContainer().innerHTML = ""
    for(let i=1; i <= n; i++) {
        console.log(i)
        const div = document.createElement("div")
        div.innerHTML = `${i}`
        div.className = `m${i}`
        div.style.gridArea = `m${i}`
        div.style.border = "1px black solid"
        measuresContainer().appendChild(div) 
    }

}

const cardFlip = () => {

    card().classList.toggle('is-flipped')
}

document.addEventListener("DOMContentLoaded", () => {
    createMeasureBtn().addEventListener('click', renderMeasures)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)

})