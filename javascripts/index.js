const fetchSong = () => {
    SongApi.fetchSong()

}



// const loadSong = (song) => {
//     console.log(song.author)
// }

const toggleNavBar = () => {
    if(navBar().className === "closed"){
        navBar().className = "open"
    } else if(navBar().className === "open") {
        navBar().className = "closed"
    }
}

