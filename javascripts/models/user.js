class User {

    static userURL = "http://localhost:3000/users"

    static all = []

    constructor({username, id, songs=[]}) {
        this.username = username
        this.id = parseInt(id)
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

    static handleSubmit(e) {
        e.preventDefault()

        const username = userLoginField().value

        if(!username) return
        
        const data = {
            username: username
        }

        saveBtn().classList.remove("hide")
        deleteBtn().classList.remove("hide")
        
        const user = User.findByUsername(username)
        if (user) {

            User.clearNav(user)
            const songs = user.songs
            const span = document.createElement('span')
            currentUser = user
            span.innerText = "Songs"
            span.className = "song-list-header"
            songListContainer().prepend(span)

            for(const song of songs) {
                const li = document.createElement('li')
                li.innerHTML = `${song.title} - ${song.author}`
                li.id = `song-${song.id}`
                songListUl().appendChild(li)
                li.addEventListener('click', (e) => Song.renderSong(e, song))
            }

        } else {
            fetch(User.userURL, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(json => {
                let newUser = new User(json)
                User.clearNav(newUser)
                currentUser = newUser
            })
        }
    }

    static clearNav(user) {
        usernameDisplay().innerHTML = `Welcome ${user.username}`
        loginContainer().style.display = "none" 
    }




}