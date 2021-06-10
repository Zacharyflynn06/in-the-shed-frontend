class SongApi {
    static fetchSong() {
        fetch('http://localhost:3000/songs/1')
        .then(resp => console.log(resp))
        debugger
    }
}