// HTML5 VIDEO CONTROL

(function () {
  
  videoControl(".presentation--video");
  
  function videoControl(target) {

    var videoContainer = document.querySelector(target + " video");
    var playPauseBtn = document.querySelector(target + " .presentation__control");
    var timePicker = document.querySelector(target + " .presentation__time");

    playPauseBtn.addEventListener("click", function() {

      if (videoContainer.paused) {
        videoContainer.play();
      } else {
        videoContainer.pause();
      }

    }, false);
    
    videoContainer.addEventListener("play", function() {
      
      playPauseBtn.classList.remove("presentation__control--play");
      playPauseBtn.classList.add("presentation__control--pause");
      
    }, false);
    
    videoContainer.addEventListener("pause", function() {
      
      playPauseBtn.classList.remove("presentation__control--pause");
      playPauseBtn.classList.add("presentation__control--play");
      
    }, false);
    
    videoContainer.addEventListener("timeupdate", function() {
      
      timePicker.textContent = secondsToTime(videoContainer.currentTime);
      
    }, false);
    
    videoContainer.addEventListener("ended", function() {
      
      videoContainer.currentTime = 0;
      
    }, false);

  }
  
  function secondsToTime(time){
             
    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);
    if (s === 60) {
        s = 0;
        m = m + 1;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h === 0) {
        fulltime = m + ':' + s;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
  }
  
})();