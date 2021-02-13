var player = require('play-sound')(opts = {})

function playTrack() {
    console.log("play")
    player.play('/audio/test.mp3', function(err){
        if (err) throw err
      })
}

document.querySelectorAll('#playBtn').addEventListener('click', () => {
    playTrack()
})