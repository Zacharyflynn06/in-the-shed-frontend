class User {

    static all = []

    consturctor({username, id, songs = []}) {
        this.username = username
        this.id = id
        this.songs = songs
    }

    static findOrCreateBy(userObj) {

    }
    
}