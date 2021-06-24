document.addEventListener("DOMContentLoaded", () => {
    // fetch users
    UserApi.fetchUsers()
    SongApi.fetchSongs()
    
    

    
    
    // buttons
    createUserBtn().addEventListener('click', UserApi.handleSubmit)
    createMeasureBtn().addEventListener('click', renderForm)
    hamburgerBtn().addEventListener('click', Nav.toggleNavBar)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)
    createChordBtn().addEventListener('click', renderChord)
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