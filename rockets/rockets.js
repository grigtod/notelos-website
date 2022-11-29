var container_artemis = document.querySelector("#unity-container-artemis");
var canvas_artemis = document.querySelector("#unity-canvas-artemis");
var loadingBar_artemis = document.querySelector("#unity-loading-bar-artemis");
var progressBarFull_artemis = document.querySelector("#unity-progress-bar-full-artemis"); 
var warningBanner_artemis = document.querySelector("#unity-warning-artemis"); 

var container_saturn = document.querySelector("#unity-container-saturn");
var canvas_saturn = document.querySelector("#unity-canvas-saturn");
var loadingBar_saturn = document.querySelector("#unity-loading-bar-saturn");
var progressBarFull_saturn = document.querySelector("#unity-progress-bar-full-saturn"); 
var warningBanner_saturn = document.querySelector("#unity-warning-saturn"); 

function unityShowBanner(msg, type) {
  function updateBannerVisibility() {
    warningBanner_artemis.style.display = warningBanner_artemis.children.length ? 'block' : 'none';
    warningBanner_saturn.style.display = warningBanner_saturn.children.length ? 'block' : 'none';
  }
  var div = document.createElement('div');
  div.innerHTML = msg;
  warningBanner_artemis.appendChild(div);
  warningBanner_saturn.appendChild(div);
  if (type == 'error') div.style = 'background: red; padding: 10px;';
  else {
    if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
    setTimeout(function() {
      warningBanner_artemis.removeChild(div);
      warningBanner_saturn.removeChild(div);
      updateBannerVisibility();
    }, 5000);
  }
  updateBannerVisibility();
}

var buildUrl = "rockets/Build";
var loaderUrl_artemis = buildUrl + "/Artemis1.loader.js";
var config_artemis = {
  dataUrl: buildUrl + "/Artemis1.data.unityweb",
  frameworkUrl: buildUrl + "/Artemis1.framework.js.unityweb",
  codeUrl: buildUrl + "/Artemis1.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Artemis1_StageBrowser",
  productVersion: "0.1",
  showBanner: unityShowBanner,
};

var loaderUrl_saturn = buildUrl + "/SaturnV.loader.js";
var config_saturn = {
  dataUrl: buildUrl + "/SaturnV.data.unityweb",
  frameworkUrl: buildUrl + "/SaturnV.framework.js.unityweb",
  codeUrl: buildUrl + "/SaturnV.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "SaturnV_StageBrowser",
  productVersion: "0.1",
  showBanner: unityShowBanner,
};

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) { 
  var meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
  document.getElementsByTagName('head')[0].appendChild(meta);
  container_artemis.className = "unity-mobile";  
  container_saturn.className = "unity-mobile";  
}  
resize_canvases();

loadingBar_artemis.style.display = "block";
loadingBar_saturn.style.display = "block";

var script_artemis = document.createElement("script");
script_artemis.src = loaderUrl_artemis;
script_artemis.onload = () => {
  createUnityInstance(canvas_artemis, config_artemis, (progress) => {
    progressBarFull_artemis.style.width = 100 * progress + "%";
  }).then((unityInstance) => {
    loadingBar_artemis.style.display = "none"; 
  }).catch((message) => {
    alert(message);
  });
};
document.body.appendChild(script_artemis);

var script_saturn = document.createElement("script");
script_saturn.src = loaderUrl_saturn;
script_saturn.onload = () => {
  createUnityInstance(canvas_saturn, config_saturn, (progress) => {
    progressBarFull_saturn.style.width = 100 * progress + "%";
  }).then((unityInstance) => {
    loadingBar_saturn.style.display = "none"; 
  }).catch((message) => {
    alert(message);
  });
};
document.body.appendChild(script_saturn);


window.addEventListener('resize', function(event) {
  resize_canvases();
}, true);

function resize_canvases()
{
  canvas_artemis.style.width = canvas_saturn.style.width = window.innerWidth * 0.8 + 'px';
  canvas_artemis.style.height = canvas_saturn.style.height =  (window.innerWidth * 0.8)/3 + 'px'; 
}