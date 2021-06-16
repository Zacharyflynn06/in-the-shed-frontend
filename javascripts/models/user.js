class User {

    static userURL = "http://localhost:3000/users"

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

    static handleSubmit(e) {
        e.preventDefault()
        const username = userLoginField().value
        const data = {
            username: username
        }
        
        const user = User.findByUsername(username)
        if (user) {

            User.clearNav(user)
            const songs = user.songs
            for(const song of songs) {
                console.log(song)
                const li = document.createElement('li')
                li.innerHTML = `${song.title} - ${song.author}`
                songListUl().appendChild(li)
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
            })
        }
    }

    static clearNav(user) {
        usernameDisplay().innerHTML = `Welcome ${user.username}`
        userLoginBtn().style.display = "none"
        createUserBtn().style.display = "none"
        userLoginField().style.display = "none"
        userLoginFieldLabel().style.display = "none"
    }




}