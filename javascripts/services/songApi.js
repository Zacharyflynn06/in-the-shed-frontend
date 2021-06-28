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

        const data = {
            user_id: currentUser.id,
            title: title,
            author: songAuthor().value,
            tempo:  bpm,
            time_signature: timeSig().value,
            measures: measures
        }

        let song = Song.findById(currentSong.id)
        if (song) {
            SongApi.handleUpdate(song, data)
        } else {
            SongApi.handleCreate(song, data)
        }
    }

    static handleCreate = (song, data) => {

        // let user = User.findById(currentUser.id)
        let status

        fetch(SongApi.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data),
            
        })
        .then(resp => {
            status = resp.status
            return resp.json()
        })
        .then(json => { 
            song = new Song({
                id: json.data.attributes.id,
                author: json.data.attributes.author,
                title: json.data.attributes.title,
                tempo: json.data.attributes.tempo,
                user: User.findById(currentUser.id),
                time_signature: json.data.attributes.time_signature.name,
                measures: json.data.attributes.measures
            })
            Nav.appendSongsToNav(currentUser.songs())
            currentSong = song
            
            if(status === 201) {
                alert("Song was Saved!")
            }
        })
        .catch(this.handleError)
    }

    static handleUpdate = (song, data) => {        
        fetch(SongApi.url + `/${song.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp =>  {
            status = resp.status
            return resp.json()
        })

        .then(json => {
                
                song.id = json.data.attributes.id,
                song.author = json.data.attributes.author,
                song.title = json.data.attributes.title,
                song.tempo = json.data.attributes.tempo,
                song.time_signature = json.data.attributes.time_signature.name,
                song.measures = json.data.attributes.measures
                Nav.appendSongsToNav(),
                currentSong = song

                if(status === "200") {
                    alert("Song was Updated!")
                }
        })
    
    }

    static handleDelete = () => {
        fetch(SongApi.url + `/${currentSong.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => { 
            currentSong.removeSongFromPage()
 
            let allIndex = Song.all.indexOf(currentSong)
            Song.all.splice(allIndex, 1)
            currentSong = ""
            alert(json.message)
        })
    }


}