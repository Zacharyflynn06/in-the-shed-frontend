class Tool {

    static renderChord = () => {
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
    
    static renderForm = () => {
        
        Metronome.createTempo()
        clickCount = 0
        measuresContainer().innerHTML = ""
        let formLength = measureField().value
        this.renderEmpties(formLength)
        this.renderTimeSignature(timeSig().value)
    }
    
    static renderEmpties = (n) => {
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
    }
    
    static renderTimeSignature = (ts) => {
        const newString = ts.replace('/', "<br>")
        const h2 = document.createElement("h2")
        h2.innerHTML = newString
        h2.className = "time-signature"
        h2.style.gridArea = 'ts'
        measuresContainer().appendChild(h2)
    }
    
    static cardFlip = () => {
        card().classList.toggle('is-flipped')
    }
}







