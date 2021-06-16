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
        // title
        songTitle().innerHTML = songObj.title
        debugger
        const span = document.createElement("span")
        span.innerHTML = songObj.author
        span.className = "author"
        songHeader().appendChild(span)
        
        // time
        bpm = songObj.tempo
        tempoRange().value = bpm
        updateTempo()
        // createTempo()

    }

    

    
}