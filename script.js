document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var picaPauAudio = document.getElementById('picaPauAudio');

    playButton.addEventListener('click', function () {
        if (picaPauAudio.paused) {
            picaPauAudio.play();
            playButton.innerText = 'Pausar Som do Pica-Pau';
        } else {
            picaPauAudio.pause();
            picaPauAudio.currentTime = 0;
            playButton.innerText = 'Reproduzir Som do Pica-Pau';
        }
    });
});
