const fetchSong = () => {
    SongApi.fetchSong()

}

const handleLogin = (e) => {
    e.preventDefault()
    console.log("it works")
    const userName = userLoginField().value
    const user = User.findByUsername(userName)
    usernameDisplay().innerHTML = `Welcome ${user.username}`
    userLoginBtn().style.display = "none"
    createUserBtn().style.display = "none"
    userLoginField().style.display = "none"

}

const toggleNavBar = () => {
    if(navBar().className === "closed"){
        navBar().className = "open"
    } else if(navBar().className === "open") {
        navBar().className = "closed"
    }
}

