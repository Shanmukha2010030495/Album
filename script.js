function playSong(song) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    
    audioSource.src = song;
    audioPlayer.load();
    audioPlayer.play();
}
