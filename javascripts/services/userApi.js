class UserApi {

    static url = 'http://localhost:3000/users'

    static fetchUsers() {
        fetch(this.url)
        .then(resp => resp.json())
        // .then(json => {debugger})
        .then(json => json.data.forEach(userObj =>
           new User({
               username: userObj.attributes.username,
               id: userObj.id,
               songs: userObj.attributes.songs})) )
        
    }









}