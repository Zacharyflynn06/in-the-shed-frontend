document.addEventListener("DOMContentLoaded", () => {
    // fetch songs
    SongApi.fetchSongs()
    

    // buttons
    createUserBtn().addEventListener('click', UserApi.handleSubmit)
    createMeasureBtn().addEventListener('click', Tool.renderForm)
    hamburgerBtn().addEventListener('click', Nav.toggleNavBar)
    nextBtn().addEventListener('click', Tool.cardFlip)
    backBtn().addEventListener('click', Tool.cardFlip)
    createChordBtn().addEventListener('click', Tool.renderChord)
    saveBtn().addEventListener('click', SongApi.handleSubmit)
    deleteBtn().addEventListener('click', SongApi.handleDelete)
    newSongBtn().addEventListener('click', Song.clearSongContainer)    
    // metronome
    decreaseMetBtn().addEventListener('click', Metronome.decreaseMetronome)
    tempoRange().addEventListener('input', Metronome.changeMetByRange)
    increaseMetBtn().addEventListener('click', Metronome.increaseMetronome)
    startButton().addEventListener('click', Metronome.startMetronome)
    Metronome.createTempo()
    

})


const clickTrack = new Timer(SoundEngine.playSong, 60000/bpm, true)