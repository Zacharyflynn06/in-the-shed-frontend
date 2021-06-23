class UserApi {

    static url = 'http://localhost:3000/users'

    static fetchUsers() {
        fetch(this.url)
        .then(resp => resp.json())
        // .then(json => {debugger})
        .then(json => json.data.forEach(userObj => 
            User.findOrCreateBy(userObj)
            
            ))
        .catch(this.handleError)
    }

    static handleSubmit(e) {
        e.preventDefault()
        
        const username = userLoginField().value
        
        if(!username) return
        
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

    static createUser(username) {
        fetch(User.userURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username: username})
        })
        .then(resp => resp.json())
        .then(json => {
            let newUser = new User(json)
            Nav.updateNav(newUser.username)
            currentUser = newUser
        })
    }
    

    static handleError(error) {
        flash().innerText = error
        flash().classList.remove("hide")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.add("hide")
        }, 5000)
    }
}