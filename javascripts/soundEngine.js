class SoundEngine {

    static playSong = () => {
        if(measureCounter === measuresInForm){
            measureCounter = 0
            cl = 0
        }
    
        if( clickCount === beatsPerBar.length) {
            clickCount = 0
            measureCounter ++

        }
    
        // sounds
        if (clickCount === 0) {
            // console.log(`chord locator is ${cl}`)
            // console.log(`measure number is ${measureCounter}`)
            if ((chordStructure()[cl]) && (chordStructure()[cl].dataset.life === "alive")) {
    
                const currentChord = chordStructure()[cl]
                const root = currentChord.dataset.root
                const quality = currentChord.dataset.quality
                currentChord.style.backgroundColor = "#0f3057"
                const soundFile = buildChordUrl(root, quality)
                const playChord = new Audio(soundFile)
                
                const playPromise = playChord.play()
                if(playPromise !== undefined) {

                    playPromise.then(_ => {
                        setTimeout(() => {
                            playChord.pause()
                            playChord.currentTime = 0
                            currentChord.style.backgroundColor = "#008891"
                        }, (60000/bpm) * beatsPerBar.length);
                    })
                }
        
            }
    
            hi.play()            
            hi.currentTime = 0 
    
            cl++
        } else {
            low.play()
            low.currentTime = 0 
        }
    
        
        
        clickCount++
        
    }
}