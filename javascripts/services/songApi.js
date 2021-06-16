class SongApi {

    static url = 'http://localhost:3000/songs'

    // static fetchSong(id) {
    //     fetch(`${SongApi.url}${id}`)
    //     .then(resp => resp.json())
    //     .then(json => Song.findOrCreateByTitle(json.data.attributes))
    //     .catch(this.handleError)
    // }

    static fetchSongs() {
        fetch(SongApi.url)
        .then(resp => resp.json())
        .then(json => json.data.forEach(songObj => {
            Song.findOrCreateByTitle(songObj)
        }))
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