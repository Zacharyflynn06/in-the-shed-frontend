let newVar = null
const renderChord = () => {

    chordContainer().innerHTML = ""

    let root = rootNote().value
    let type = rootType().value
    let quality = chordQuality().value

    if(type === "♮") type = ""
    if(quality === "maj") quality = ""

    const div = document.createElement("div")
    div.innerHTML = `${root}${type}${quality}`
    div.className = "new-chord"
    div.setAttribute("draggable", "true")
    chordContainer().appendChild(div)

    const newChord = document.querySelector('.new-chord')
    newVar = newChord
    newChord.addEventListener('dragstart', dragStart)
    newChord.addEventListener('dragend', dragEnd)
    playChord(`${root}${type}`, `${quality}`)
}


const cardFlip = () => {
    card().classList.toggle('is-flipped')
}

const renderForm = () => {
    
    createTempo()
    clickCount = 0
    measuresContainer().innerHTML = ""

    const n = measureField().value
    const s = timeSig().value
    const newString = s.replace('/', "<br>")

    for(let i=1; i <= n; i++) {
        const div = document.createElement("div")
        div.className = `empty`
        div.style.gridArea = `m${i}`
        div.innerHTML = `${i}`
        div.id = `${i}`
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
    h2.className = "time-signature"
    h2.style.gridArea = 'ts'
    measuresContainer().appendChild(h2)
}

// drag and drop
// new one
function dragStart(e) {
    e.preventDefault
    
    if(this.className === "new-chord"){
        this.className += " hold"
        setTimeout(() => this.className = "invisible", 0)
    } else if (this.className === "full-chord") {
        this.className = "move-chord"
        // const moveChord = document.querySelector('.move-chord')
        // newVar = moveChord
    }
}

function dragEnd() {
    console.log("end")
}


// empties

function dragEnter(e) {
    e.preventDefault()
    console.log("enter")
    this.className += " hovered"
}

function dragOver(e) {
    e.preventDefault()
    console.log("over")
}


function dragLeave() {
    console.log("leave")

    if(this.className === "full-chord hovered"){
        this.className = "full-chord"
    }else{
        this.className = "empty"
        this.innerHTML = this.id
    }
}

function dragDrop() {
    
    console.log("drop")
    this.innerHTML = ""
    this.append(newVar)
    this.setAttribute("draggable", "true")
    this.className = "full-chord"
    this.innerHTML = newVar.innerHTML

    const fullChord = () => document.querySelector('.full-chord')
    fullChord().addEventListener('dragstart', dragStart)
    fullChord().addEventListener('dragend', dragEnd)
}


