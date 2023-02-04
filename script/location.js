const btn = document.querySelector("#ShareLocation");

btn.addEventListener("click", function(e){ 
  getLocation();
})
function getLocation(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( function(pos) {
      window.stop();
      console.log("Latitude: " + pos.coords.latitude); 
      console.log("Longitude: " + pos.coords.longitude);
    });
  } else { 
      console.log("Geolocation is not supported by browser."); 
  }
}
