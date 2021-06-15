class User {

    static all = []

    constructor({username, id, songs=[]}) {
        this.username = username
        this.id = id
        this.songs = songs
        User.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByUsername(username) {
        return this.all.find(function(user) {user.username === username})
    }

}