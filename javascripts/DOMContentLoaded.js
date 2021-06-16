document.addEventListener("DOMContentLoaded", () => {
    // fetch users
    UserApi.fetchUsers()
    SongApi.fetchSongs()
    
  
    
    
    // buttons
    createUserBtn().addEventListener('click', User.handleSubmit)
    decreaseMetBtn().addEventListener('click', decreaseMetronome)
    createMeasureBtn().addEventListener('click', renderForm)
    hamburgerBtn().addEventListener('click', toggleNavBar)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)
    createChordBtn().addEventListener('click', renderChord)
    // loadSongBtn().addEventListener("click", fetchSong)



    // metronome
    tempoRange().addEventListener('input', changeMetByRange)
    createTempo()
})