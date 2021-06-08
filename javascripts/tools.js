// measure builder
const createMeasureBtn = () => document.querySelector('.measure-button')
const measureField = () => document.querySelector('.measure-field')
const measuresContainer = () => document.querySelector('.measures-container')
const card = () => document.querySelector('.card')
const nextBtn = () => document.querySelector('.next-btn')
const backBtn = () => document.querySelector('.back-btn')

// chord builder
const createChordBtn = () => document.querySelector('.create-chord-button')
const rootNote = () => document.querySelector('.root-note')
const rootType = () => document.querySelector('.root-type')
const chordQuality = () => document.querySelector('.chord-quality')
const chordContainer = () => document.querySelector('.chord-container')

const renderChord = () => {

    let note = rootNote().value
    let type = rootType().value
    let quality = chordQuality().value

    if(type === "♮") type = ""

    chord = `${note}${type}${quality}`

    const div = document.createElement("div")
    div.innerHTML = chord
    div.className = "chord"
    chordContainer().appendChild(div)

}

const cardFlip = () => {
    card().classList.toggle('is-flipped')
}

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


document.addEventListener("DOMContentLoaded", () => {
    createMeasureBtn().addEventListener('click', renderMeasures)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)
    createChordBtn().addEventListener('click', renderChord)

})