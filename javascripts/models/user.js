class User {

    static userURL = "http://localhost:3000/users"

    static all = []

    constructor({username, id}) {
        this.username = username
        this.id = parseInt(id)
        User.all.push(this)
    }

    static getAll() {
        return this.all
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
        
    static handleSubmit(e) {
        e.preventDefault()
        
        const username = userLoginField().value
        
        if(!username) return
        
        const data = {
            username: username
        }
        
        saveBtn().classList.remove("hide")
        deleteBtn().classList.remove("hide")
        newSongBtn().classList.remove("hide")
        
        const user = User.findByUsername(username)
        
        if (user) {
            user.renderUser()
            
        } else {
            UserApi.createUser(username)
        }
        
    }
    
    renderUser() {
        debugger
        this.updateNav()
        const span = document.createElement('span')
        span.innerText = "Songs"
        span.className = "song-list-header"
        songListContainer().prepend(span)
        Song.appendSongsToNav(this.songs())
        currentUser = this
    }
    
    updateNav() {
        usernameDisplay().innerHTML = `Welcome ${this.username}`
        loginContainer().style.display = "none" 
    }
    
    songs() {
       return Song.all.filter(song => song.user === this)
    }

    
    
}