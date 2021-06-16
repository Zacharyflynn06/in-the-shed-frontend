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
        return this.all.find(user => user.username === username)
    }

    static findOrCreateBy(userObj) {
        return this.findByUsername(userObj.username) || new User({
            username: userObj.attributes.username,
            id: userObj.id,
            songs: userObj.attributes.songs})
    }


}