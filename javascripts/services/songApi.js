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


    static handleSubmit(e) {
        e.preventDefault()
        const title = songTitle().value
        
        if(title === "Song Title") {
            SongApi.handleError("Please enter your songs title!")
        }

        const measures = ["measure"]
        
        const attributes = {
            user_id: currentUser.id,
            title: title,
            author: "Zac",
            tempo:  bpm,
            time_signature_id: 1,
            measures: [{song_id: 4, chord: "C"}]
        }

        const song = Song.findByTitle(title)

        if (song) {
            // handle update
        } else {
            // handle create
            fetch(SongApi.url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(attributes),
                
            })
            .then(resp => resp.json())
            .then(json => {
                // let newSong = new Song(json)

                    console.log(json)
                    
                
   
            })
            .catch(this.handleError)

        }



    }
}