class Measure {

    static all = []

    constructor({user_id, chords = [] }){
        this.user_id = user_id
        this.chords = chords
        Measure.all.push(this)
    }

    static findById(id) {
        return this.all.find(song => song.id === id)
    }
}