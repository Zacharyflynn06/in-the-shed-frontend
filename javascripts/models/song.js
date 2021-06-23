class Song {

    static all = []

    constructor({user, id, title, author, tempo, time_signature, measures = []}){
        this.user = user
        this.id = parseInt(id)
        this.title = title
        this.tempo = parseInt(tempo)
        this.author = author
        this.measures = measures
        this.time_signature = time_signature

        Song.all.push(this)
    }
    
    static findById(id) {
        return this.all.find(song => song.id === id)
    }

    static findByTitle(title) {
        return this.all.find(song => song.title === title)
    }

    static findOrCreateByTitle(songObj) {
        return this.findByTitle(songObj.title) || new Song({
            user: User.findByUsername(songObj.attributes.user.username),
            id: songObj.id,
            title: songObj.attributes.title,
            tempo: songObj.attributes.tempo,
            author: songObj.attributes.author,
            measures: songObj.attributes.measures,
            time_signature: songObj.attributes.time_signature.name
        })

    }

    renderSong() {

        Song.clearSong()
        const id = parseInt(this.id.split("-")[1])
        const songObj = Song.findById(id)

        currentSong = songObj

        songTitle().value = songObj.title
        songAuthor().value = songObj.author
        bpm = songObj.tempo
        tempoRange().value = bpm
        updateTempo()
  
        songObj.renderTimeSignature()

        songObj.renderMeasures()

    }

    static removeSongsFromNav() {
        while (songListUl().firstChild) 
        songListUl().removeChild(songListUl().lastChild)
    }

    static appendSongsToNav() {
        this.removeSongsFromNav()

        for(let song of currentUser.songs()) {
            const li = document.createElement('li')
            li.innerHTML = `${song.title} - ${song.author}`
            li.id = `song-${song.id}`
            songListUl().appendChild(li)
            li.addEventListener('click', song.renderSong)
        }

    }

    renderTimeSignature() {
        debugger
        const newString = this.time_signature.replace('/', "<br>")
        const h2 = document.createElement("h2")
        h2.innerHTML = newString
        h2.className = "time-signature"
        h2.style.gridArea = 'ts'
        measuresContainer().appendChild(h2)
        
    }

    renderMeasures() {
        debugger
        let n = this.measures.length
        if(n > 32) {n = 32}
    
        for(let i=1; i <= n; i++) {
            const div = document.createElement("div")
            div.className = `empty`
            div.style.gridArea = `m${i}`
            div.innerHTML = `${i}`
            div.id = `${i}`
            div.dataset.life = "dead"
            measuresContainer().appendChild(div) 
            div.addEventListener('dragover', dragOver)
            div.addEventListener('dragenter', dragEnter)
            div.addEventListener('dragleave', dragLeave)
            div.addEventListener('drop', dragDrop)
        }
    
        const empties = document.querySelectorAll('.empty')

        let x = 0
        for(let empty of empties) {

            empty.className = `full-chord`
            empty.innerHTML = this.measures[x].chords[0].name
            empty.dataset.root = this.measures[x].chords[0].root
            empty.dataset.quality = this.measures[x].chords[0].quality
            empty.dataset.name = this.measures[x].chords[0].name
            empty.dataset.life = "alive"

            empty.setAttribute("draggable", "true")
            empty.addEventListener('dragstart', dragStart)
            empty.addEventListener('dragend', dragEnd)
            x++
        }
    }


    static removeSongFromPage() {
        
        const li = document.querySelector(`#song-${currentSong.id}`)
        songListUl().removeChild(li)
        
        this.clearSong()

    }
    static clearSong = () => {
        while (measuresContainer().firstChild) {
            measuresContainer().removeChild(measuresContainer().lastChild)
        }
        songTitle().value = "Song Title"
        songAuthor().value = "Author"
        currentSong = ""
    }
    
}