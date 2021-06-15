document.addEventListener("DOMContentLoaded", () => {

    decreaseMetBtn().addEventListener('click', decreaseMetronome)

    createMeasureBtn().addEventListener('click', renderForm)
    hamburgerBtn().addEventListener('click', toggleNavBar)
    nextBtn().addEventListener('click', cardFlip)
    backBtn().addEventListener('click', cardFlip)
    createChordBtn().addEventListener('click', renderChord)
    // loadSongBtn().addEventListener("click", fetchSong)
    createTempo()
})