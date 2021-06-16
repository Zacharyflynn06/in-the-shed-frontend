class SongApi {
    static fetchSong() {
        fetch('http://localhost:3000/songs/1')
        .then(resp => resp.json())
        .then(json => console.log(json))
    }
}