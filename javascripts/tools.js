const renderChord = () => {

    chordContainer().innerHTML = ""

    let note = rootNote().value
    let type = rootType().value
    let quality = chordQuality().value

    if(type === "♮") type = ""

    chord = `${note}${type}${quality}`

    const div = document.createElement("div")
    div.innerHTML = chord
    div.className = "new_chord"
    div.setAttribute("draggable", "true")
    chordContainer().appendChild(div)

    const newChord = () => document.querySelector('.new_chord')
    newChord().addEventListener('dragstart', dragStart)
    newChord().addEventListener('dragend', dragEnd)
}

const cardFlip = () => {
    card().classList.toggle('is-flipped')
}

const renderMeasures = () => {
    
    const n = measureField().value

    measuresContainer().innerHTML = ""
    for(let i=1; i <= n; i++) {
        const div = document.createElement("div")
        div.innerHTML = `${i}`
        div.className = `m${i} empty_measure`
        div.style.gridArea = `m${i}`
        measuresContainer().appendChild(div) 
    }

}

// drag and drop

//loop through empties
for(const empty of empty_measures) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// Drag

function dragStart() {
    this.className += " hold-measure"
    setTimeout(() => this.className = "invisible", 0)
}


function dragEnd() {
    this.className = "new_chord"
}

function dragOver() {
    
}

function dragEnter() {
    
}

function dragLeave() {
    
}

function dragDrop() {
    
}
document.addEventListener("DOMContentLoaded", () => {
    createMeasureBtn().addEventListener('click', renderMeasures)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)
    createChordBtn().addEventListener('click', renderChord)
    // if(newChord()){
        
        
    // }

})