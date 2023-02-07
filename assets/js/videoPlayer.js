function videoPlay() {
    var video = document.getElementById("video");
    video.play();
    video.volume = 0.5;
  }
  
  window.addEventListener('click', () =>{
    document.getElementById("song").play();
  });
   
