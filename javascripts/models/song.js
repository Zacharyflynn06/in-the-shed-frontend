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
        songTitle().innerHTML = songObj.title
    
        const span = document.createElement("span")
        span.innerHTML = songObj.author
        span.className = "author"
        songHeader().appendChild(span)
        
        // time
        bpm = songObj.tempo
        tempoRange().value = bpm
        updateTempo()
        // createTempo()
        // let formLength = songObj.measures.length

        const measures = songObj.measures
        // measures
        debugger
        let x = 1
        for(let measure of measures) {
            const div = document.createElement("div")
            div.className = `full-chord`
            div.style.gridArea = `m${x}`
            div.innerHTML = measure.chords[0].name
            div.id = `${x}`
            div.dataset.root = measure.chords[0].root
            div.dataset.quality = measure.chords[0].quality
            measuresContainer().appendChild(div)
            x++
        }



    }

    

    
}