var myAudio = document.getElementById("sidemusik");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};