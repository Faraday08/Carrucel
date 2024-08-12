var audio = document.getElementById('audio');
var playPausaBTN = document.getElementById('playPausaBTN');
var count = 0;

function playPausa(){
    if (count == 0){
        count = 1
        audio.play();
        playPausaBTN.innerHTML = "Pause &#9208;";
    }
    else{
        count = 0
        audio.pause();
        playPausaBTN.innerHTML = "Play &#9658;";
    }
}

function stop(){
    playPausa()
    audio.pause();
    audio.currentTime = 0;
    playPausaBTN.innerHTML = "Play &#9658;";
}