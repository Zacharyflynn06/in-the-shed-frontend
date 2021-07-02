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

    static appendSongsToNav(songs) {
        this.removeSongsFromNav()

        songs = songs.sort(function (a, b) {

            return (a.title <= b.title ?  -1 :  1)})

        for(let song of songs) {
            const li = document.createElement('li')
            li.innerHTML = `${song.title} - ${song.author}`
            li.id = `song-${song.id}`
            songListUl().appendChild(li)
            li.addEventListener('click', song.renderSong)
        }
    }

    static removeSongsFromNav() {
        while (songListUl().firstChild) 
        songListUl().removeChild(songListUl().lastChild)
    }


}