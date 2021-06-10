class Song {

    static all = []

    constructor({user, id, title, tempo, author, measures = []}){
        this.user = user
        this.id = id
        this.title = title
        this.tempo = tempo
        this.author = author
        this.measures = measures

        Song.all.push(this)
    }

    static getAll() {
        return this.all
    }
    
}