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

    static handleLogin(e) {
        e.preventDefault()
        console.log("it works")
        const username = userLoginField().value
        const user = User.findByUsername(username)
        const songs = user.songs
        usernameDisplay().innerHTML = `Welcome ${user.username}`
        userLoginBtn().style.display = "none"
        createUserBtn().style.display = "none"
        userLoginField().style.display = "none"
        userLoginFieldLabel().style.display = "none"
    
        for(const song of songs) {
            console.log(song)
            const li = document.createElement('li')
            li.innerHTML = `${song.title} - ${song.author}`
            songListUl().appendChild(li)
        }
    }

    static handleSubmit(e) {
        e.preventDefault()
        const username = userLoginField().value
        const user = User.findByUsername(username)
        if (user) {User.handleLogin()
        } else {
            fetch(UserApi.userURL, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
        }
    }




}