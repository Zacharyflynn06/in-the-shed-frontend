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
            return
        }

        const measures = []

        for(let div of chordStructure()){
            let chord = {
                name: div.innerHTML,
                root: div.dataset.root,
                quality: div.dataset.quality
            }
            measures.push(chord)
        }

        const attributes = {
            user_id: currentUser.id,
            title: title,
            author: "Zac",
            tempo:  bpm,
            time_signature: timeSig().value,
            measures: measures
        }

        let song = Song.findByTitle(title)

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
            .then(json => console.log(json))
            .catch(this.handleError)

            song = new Song(attributes)
            Song.appendSongToNav(song)
        }
    }

    static handleDelete = (e) => {
        debugger
        fetch(SongApi.url + `/${currentSong.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            {debugger}
        })
    }
}