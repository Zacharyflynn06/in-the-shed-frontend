class UserApi {

    static url = 'http://localhost:3000/users'

    static fetchUsers() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(json => json.data.forEach(userObj => 
            userObj.findOrCreateBy
            
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
        
        UserApi.findOrCreateUser(username)
        
    }

    static findOrCreateUser(username) {
        fetch(User.userURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username: username})
        })
        .then(resp => resp.json())
        .then(json => {
            let user = new User({
                id: json.data.id,
                username: json.data.attributes.username
            }
            )
            currentUser = user
            user.renderUser()
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