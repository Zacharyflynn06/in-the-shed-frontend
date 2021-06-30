class User {

    static userURL = "http://localhost:3000/users"

    static all = []

    constructor({username, id}) {
        this.username = username
        this.id = parseInt(id)
        User.all.push(this)
    }

    static findById(id) {
        return this.all.find(user => user.id === id)
    }
    
    static findByUsername(username) {
        return this.all.find(user => user.username === username)
    }
    
    static findOrCreateBy(userObj) {
        return this.findByUsername(userObj.username) || new User({
            username: userObj.attributes.username,
            id: userObj.id,
        })}

    renderUser() {
        Nav.updateNav(this.username)
        const span = document.createElement('span')
        span.innerText = "Songs"
        span.className = "song-list-header"
        songListContainer().prepend(span)
        Nav.appendSongsToNav(this.songs())
        currentUser = this
    }
    
    songs() {
       return Song.all.filter(song => song.userId === this.id)
    }

}