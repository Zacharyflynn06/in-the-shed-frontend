class Song {

    static all = []

    constructor({user, id, title, author, tempo, time_signature, measures = []}){
        this.user = user
        this.id = id
        this.title = title
        this.tempo = tempo
        this.author = author
        this.measures = measures
        this.time_signature = time_signature

        Song.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByTitle(title) {
        return this.all.find(song => song.title === title)
    }

    static findOrCreateByTitle(songObj) {
        return this.findByTitle(songObj.title) || new Song({
            user: User.findByUsername(songObj.user.username),
            id: songObj.id,
            title: songObj.title,
            tempo: songObj.tempo,
            author: songObj.author,
            measures: songObj.measures,
            time_signature: songObj.time_signature.name
        })
    }

    static renderSong() {
        console.log(song)
    }
    
}