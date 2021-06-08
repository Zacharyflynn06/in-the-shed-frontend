const renderChord = () => {

    chordContainer().innerHTML = ""

    let note = rootNote().value
    let type = rootType().value
    let quality = chordQuality().value

    if(type === "♮") type = ""

    const div = document.createElement("div")
    div.innerHTML = `${note}${type}${quality}`
    div.className = "new_chord"
    div.setAttribute("draggable", "true")
    chordContainer().appendChild(div)

}

const cardFlip = () => {
    card().classList.toggle('is-flipped')
}

const renderMeasures = () => {
    
    const n = measureField().value
    const s = timeSig().value
    const newString = s.replace('/', "<br>")

    measuresContainer().innerHTML = ""
    // timeSigContainer().innerHTML = s
    for(let i=1; i <= n; i++) {
        const div = document.createElement("div")
        div.innerHTML = `${i}`
        div.className = `empty`
        div.style.gridArea = `m${i}`
        measuresContainer().appendChild(div) 
    }

    const empties = document.querySelectorAll('.empty')
    for(const empty of empties) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
    }


    const h2 = document.createElement("h2")
    h2.innerHTML = newString
    h2.className = "time-signiture"
    h2.style.gridArea = 'ts'
    measuresContainer().appendChild(h2)
}

// drag and drop

function dragStart() {
    this.className += " hold-measure"
    setTimeout(() => this.className = "invisible", 0)
}

function dragEnd() {
    this.className = "new_chord"
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += " hovered"
}

function dragLeave() {
    if(this.className === "full_chord hovered"){
        this.className = "full_chord"
        console.log(this)
    } else {
        this.className = "empty"
    }
}

function dragDrop() {
    this.innerHTML = ""
    this.append(newChord())
    this.className = "full_chord"
    this.innerHTML = newChord().innerHTML

}
document.addEventListener("DOMContentLoaded", () => {
    createMeasureBtn().addEventListener('click', renderMeasures)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)
    createChordBtn().addEventListener('click', renderChord)
})