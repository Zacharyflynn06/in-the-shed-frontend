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

    static handleError(error) {
        flash().innerText = error
        flash().classList.remove("hide")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.add("hide")
        }, 5000)
    }
}