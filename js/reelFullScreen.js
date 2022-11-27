//Reel fullscreen:
 
document.addEventListener("fullscreenchange", function() { OnCancelFullscreen(); });
document.addEventListener("mozfullscreenchange", function() { OnCancelFullscreen(); });
document.addEventListener("webkitfullscreenchange", function() { OnCancelFullscreen(); });
document.addEventListener("msfullscreenchange", function() { OnCancelFullscreen(); });

function OnCancelFullscreen()
{ 
  reelVideoRef.muted = !reelVideoRef.muted;
}
 
function RequestFullScreen()
{
  console.log("Requesting fullscreen!"); 
  //videoRef.muted = false;
  reelVideoRef.currentTime = 0;
  if (reelVideoRef.requestFullscreen) { reelVideoRef.requestFullscreen(); } 
  else if (reelVideoRef.mozRequestFullScreen) { reelVideoRef.mozRequestFullScreen(); } 
  else if (reelVideoRef.webkitRequestFullscreen) { reelVideoRef.webkitRequestFullscreen(); } 
  else if (reelVideoRef.msRequestFullscreen) { reelVideoRef.msRequestFullscreen(); } 
}
