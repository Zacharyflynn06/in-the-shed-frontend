class Chord {

    static all = []

    constructor({name, root, quality, id}) {
        this.name = name
        this.root = root
        this.quality = quality
        this.id = parseInt(id)
    }

    static findById(name) {
        return this.all.find(chord => chord.name === name)
    }


}

