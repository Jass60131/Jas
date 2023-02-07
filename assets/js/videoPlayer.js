function videoPlay() {
    var video = document.getElementById("video");
    video.play();
    video.volume = 0.5;
  }
  
  window.addEventListener('click', () =>{
    document.getElementById("song").play();
    document.getElementById("song").loop=true;
    document.getElementById("song").volume= 0.2;
  });
   
