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
    saveBtn().addEventListener('click', SongApi.handleSubmit)
    deleteBtn().addEventListener('click', SongApi.handleDelete)


    // metronome
    tempoRange().addEventListener('input', changeMetByRange)
    decreaseMetBtn().addEventListener('click', decreaseMetronome)
    increaseMetBtn().addEventListener('click', increaseMetronome)
    startButton().addEventListener('click', startMetronome)
    createTempo()
})