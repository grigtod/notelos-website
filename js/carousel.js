function DefineSlides(_slidesID)
{ 
  var slideIndex = 0;
  
  var slides = document.getElementsByClassName(_slidesID + "-Slide");
  var numberText = document.getElementById(_slidesID + "-number");
  var galleryElements = document.getElementsByClassName(_slidesID + "-element");

  function ClickBack()
  {
    slideIndex--;
    OnSlideChange();
  }

  function ClickForward()
  {
    slideIndex++;
    OnSlideChange();
  }
 
  function OnSlideChange()
  { 
    MuteAndStopAll();
    if (slideIndex > slides.length-1) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length-1}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(slideIndex);
    slides[slideIndex].style.display = "block"; 
    numberText.innerHTML = (slideIndex + 1) + " / " + slides.length; 
  }

  document.getElementById(_slidesID + "-gallery-prev").addEventListener("click", ClickBack);
  document.getElementById(_slidesID + "-gallery-next").addEventListener("click", ClickForward);
  OnSlideChange(slideIndex);
}

function MuteAndStopAll()
{ 
  //$('.youtube-video-1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');

  var allVideos = document.getElementsByTagName("iframe");
  
  //let func = false == 'hide' ? 'pauseVideo' : 'playVideo';
  for(let i = 0; i < allVideos.length; i++)
  { 
    //allVideos[i].contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');

    //var payload = window.JSON.stringify( { event: 'command', func: ( "pauseVideo" ) } );
    //allVideos[i].contentWindow.postMessage( '{event:"command",func:"pauseVideo",args:""}', "*" );

    
    //console.log(allVideos[i].contentWindow); 

    $(allVideos[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'));

    //allVideos[i].contentWindow.postMessage('{event:"command", func: + func + '","args":""}', '*');

     //                                     ( { event:'command', func: ( flag ? "playVideo" : "pauseVideo" ) } );
    //allVideos[i].player.stopVideo();
    //https://codepen.io/dsheiko/details/YzRpxq
  }
}


/*function Lol()
{ 
  $('.youtube-video-1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  
}*/