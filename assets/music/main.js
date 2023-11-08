/*
var playlist = Array("chain1.mp3", "chain2.mp3", "chain3.mp3");
var randomSong = playlist[Math.floor(Math.random()*playlist.length)];
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', randomSong);*/

var audio = document.getElementById("audio-track");
audio.volume = 0.5;
var isPlaying = false;


const timelineContainer = document.getElementById('song-timeline');
const seekSlider = document.getElementById('seek-slider');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
let animationFrame = null;

// Toggle play / pause button and audio

function togglePlayPause(pathClass) {
    var paths = document.querySelectorAll('.' + pathClass);
    for (var i = 0; i < paths.length; i++) {
        paths[i].classList.toggle('active');
    }
    if (isPlaying) {
        audio.pause();
        cancelAnimationFrame(animationFrame);
    }
    else {
        audio.play();
        requestAnimationFrame(whilePlaying);
    }
}

audio.onplaying = function () {
    isPlaying = true;
}

audio.onpause = function () {
    isPlaying = false;
}


if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Blinding Lights (Instrumental)',
    artist: 'The Weeknd',
    album: 'Blinding Lights',
    artwork: [
        { src: '../img/aurgon.png', sizes: '96x96', type: 'image/png' },
        { src: '../img/aurgon.png', sizes: '128x128', type: 'image/png' },
        { src: '../img/aurgon.png', sizes: '192x192', type: 'image/png' },
        { src: '../img/aurgon.png', sizes: '256x256', type: 'image/png' },
        { src: '../img/aurgon.png', sizes: '384x384', type: 'image/png' },
        { src: '../img/aurgon.png', sizes: '512x512', type: 'image/png' },
    ]
    });

   //   navigator.mediaSession.setActionHandler('play', function() {});
   // navigator.mediaSession.setActionHandler('pause', function() {}); 
   // navigator.mediaSession.setActionHandler('seekbackward', function() {});
  //  navigator.mediaSession.setActionHandler('seekforward', function() {});
   // navigator.mediaSession.setActionHandler('previoustrack', function() {});
   // navigator.mediaSession.setActionHandler('nexttrack', function() {});
}
