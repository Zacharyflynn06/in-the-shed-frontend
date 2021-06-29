// drag and drop
// new one

function dragStart(e) {

    e.preventDefault

    if(this.className === "new-chord"){
        this.className += " hold"
        setTimeout(() => this.className = "invisible", 0)
    } else if (this.className === "full-chord") {
        console.log("start", this)
        moveVar.name = this.dataset.name
        moveVar.quality = this.dataset.quality
        moveVar.root = this.dataset.quality
        this.className = "move-chord"
        this.className += " hold"
    }
}

function dragEnd(e) {
    e.preventDefault
}


// empties

function dragEnter(e) {
    e.preventDefault()
    this.className += " hovered"
}

function dragOver(e) {
    e.preventDefault()
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

    if(newVar !== ""){
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