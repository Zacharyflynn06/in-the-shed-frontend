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

    static getAll() {
        return this.all
    }

    
    static findById(id) {
        return this.all.find(song => song.id === id)
    }

    static findByTitle(title) {
        return this.all.find(song => song.title === title)
    }

    static findOrCreateByTitle(songObj) {
        const song = this.findByTitle(songObj.title) || new Song({
            user: User.findByUsername(songObj.attributes.user.username),
            id: songObj.id,
            title: songObj.attributes.title,
            tempo: songObj.attributes.tempo,
            author: songObj.attributes.author,
            measures: songObj.attributes.measures,
            time_signature: songObj.attributes.time_signature.name
        })

    }

    static renderSong(e, song) {
        const songObj = Song.findById(song.id)

        currentSong = songObj

        songTitle().value = songObj.title
        songAuthor().value = songObj.author

        // time
        bpm = songObj.tempo
        tempoRange().value = bpm
        updateTempo()
        // createTempo()
        // let formLength = songObj.measures.length

        const measures = songObj.measures
        // measures
        let x = 1
        for(let measure of measures) {
            const div = document.createElement("div")
            div.className = `full-chord`
            div.style.gridArea = `m${x}`
            div.innerHTML = measure.chords[0].name
            div.id = `${x}`
            div.dataset.root = measure.chords[0].root
            div.dataset.quality = measure.chords[0].quality
            div.dataset.life = "alive"
            measuresContainer().appendChild(div)
            x++
        }
    }

    static appendSongToNav(song) {
        
        const li = document.createElement('li')
        li.innerHTML = `${song.title} - ${song.author}`
        li.id = `song-${song.id}`
        songListUl().appendChild(li)
        li.addEventListener('click', (e) => Song.renderSong(e, song))
    }

    static renderTimeSignature() {
        const newString = timeSignature.replace('/', "<br>")
        const h2 = document.createElement("h2")
        h2.innerHTML = newString
        h2.className = "time-signature"
        h2.style.gridArea = 'ts'
        measuresContainer().appendChild(h2)
        
    }

    
}