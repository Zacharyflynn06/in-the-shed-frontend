class SongApi {

    static url = 'http://localhost:3000/songs/'

    static fetchSong(id) {
        fetch(`${SongApi.url}${id}`)
        .then(resp => resp.json())
        .then(json => Song.findOrCreateByTitle(json.data.attributes))
    }
}