const fetchSong = () => {
    SongApi.fetchSong()

}

const toggleNavBar = () => {
    if(navBar().className === "closed"){
        navBar().className = "open"
    } else if(navBar().className === "open") {
        navBar().className = "closed"
    }


}