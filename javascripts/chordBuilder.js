
const renderChord = () => {
    chordContainer().innerHTML = ""

    let root = rootNote().value
    let type = rootType().value
    let quality = chordQuality().value

    if(type === "♮") type = ""
    if(quality === "maj") quality = ""
    root = root + type
    const div = document.createElement("div")
    div.innerHTML = `${root}${quality}`
    div.className = "new-chord"
    div.dataset.name = `${root}${quality}`
    div.dataset.root = root
    div.dataset.quality = quality
    div.dataset.life = "alive"
    div.setAttribute("draggable", "true")
    chordContainer().appendChild(div)

    const newChord = document.querySelector('.new-chord')
    newVar = newChord
    newChord.addEventListener('dragstart', dragStart)
    newChord.addEventListener('dragend', dragEnd)
    const url = buildChordUrl(root, quality) 
    const chordVar = new Audio(url) 
    chordVar.play()
}



const renderForm = () => {
    
    createTempo()
    clickCount = 0
    measuresContainer().innerHTML = ""
    
    let n = measureField().value
    if(n > 32) {n = 32}
    
    for(let i=1; i <= n; i++) {
        const div = document.createElement("div")
        div.className = `empty`
        div.style.gridArea = `m${i}`
        div.innerHTML = `${i}`
        div.id = `${i}`
        div.dataset.life = "dead"
        measuresContainer().appendChild(div) 
    }
    
    const empties = document.querySelectorAll('.empty')
    for(const empty of empties) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
    }
    
    Song.renderTimeSignature(timeSig().value)
}

// drag and drop
// new one
let moveVar = {name: "", quality: "", root: ""}
function dragStart(e) {
    e.preventDefault
    
    console.log("start",this)
    if(this.className === "new-chord"){
        this.className += " hold"
        setTimeout(() => this.className = "invisible", 0)
    } else if (this.className === "full-chord") {
        moveVar.name = this.dataset.name
        moveVar.quality = this.dataset.quality
        moveVar.root = this.dataset.quality
        this.className = "move-chord"
        this.className += " hold"
        
    }
}

function dragEnd() {
    // console.log("end")
}


// empties

function dragEnter(e) {
    e.preventDefault()
    this.className += " hovered"
}

function dragOver(e) {
    e.preventDefault()
    // console.log("over")
}


function dragLeave() {
    console.log("leave", this)
    if(this.className === "full-chord hovered"){
        this.className = "full-chord"
    } else if(this.className === "move-chord hovered"){
        this.className = "move-chord"
    } else{
        this.className = "empty"
        this.innerHTML = this.id
    }
}

function dragDrop() {

    if(newVar){
        console.log("drop", this)
        this.innerHTML = ""
        this.append(newVar)
        this.setAttribute("draggable", "true")
        this.className = "full-chord"
        this.innerHTML = newVar.innerHTML
        this.dataset.root = newVar.dataset.root
        this.dataset.quality = newVar.dataset.quality
        this.dataset.name = newVar.dataset.name
        this.dataset.life = "alive"
        
        newVar = ""
    } else {
        console.log("move", moveVar)
        this.innerHTML = ""
        this.append(moveVar)
        this.setAttribute("draggable", "true")
        this.className = "full-chord"
        this.dataset.root = moveVar.root
        this.dataset.quality = moveVar.quality
        this.dataset.name = moveVar.name
        this.innerHTML = moveVar.name
        this.dataset.life = "alive"
        // moveVar = ""
    }

    const fullChord = () => document.querySelector('.full-chord')
    fullChord().addEventListener('dragstart', dragStart)
    fullChord().addEventListener('dragend', dragEnd)
    
}

const cardFlip = () => {
    card().classList.toggle('is-flipped')
}

