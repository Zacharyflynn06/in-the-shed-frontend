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
            author: songAuthor().value,
            tempo:  bpm,
            time_signature: timeSig().value,
            measures: measures
        }

        let song = Song.findByTitle(title)
        if (song) {
            // handle update

            fetch(SongApi.url + `/${song.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(attributes)
            })
            .then(resp => resp.json())
            .then(json => { 
                
                    song.id = json.data.attributes.id,
                    song.author = json.data.attributes.author,
                    song.title = json.data.attributes.title,
                    song.tempo = json.data.attributes.tempo,
                    song.time_signature = json.data.attributes.time_signature.name,
                    song.measures = json.data.attributes.measures
            })

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
                song = new Song({
                    id: json.data.attributes.id,
                    author: json.data.attributes.author,
                    title: json.data.attributes.title,
                    tempo: json.data.attributes.tempo,
                    user: User.findById(json.data.attributes.user.id),
                    time_signature: json.data.attributes.time_signature.name,
                    measures: json.data.attributes.measures
                })
                Song.appendSongToNav(song)
                currentSong = song
            })
            .catch(this.handleError)
        }
    }

    static handleDelete = () => {
        fetch(SongApi.url + `/${currentSong.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        // .then(resp => resp.json())
        .then(json => {
            Song.removeSongFromPage()
            delete Song.findById(currentSong.id)
            currentSong = ""
            alert(json.message)
        })
    }


}