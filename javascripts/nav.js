class Nav {

    static toggleNavBar = () => {
        if(navBar().className === "closed"){
            navBar().className = "open"
        } else if(navBar().className === "open") {
            navBar().className = "closed"
        }
    }

    static updateNav(username) {
        usernameDisplay().innerHTML = `Welcome ${username}`
        loginContainer().className = "hide-login"
    }

    static resetNav() {
        loginContainer().className = "show-login"
        currentUser = ""
    }


}