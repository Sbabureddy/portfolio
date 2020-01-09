// Google maps api start
function initMap() {
  var myLatLng = { lat: 12.9716, lng: 77.5946 };
  // map
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12
  });
  // marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Banglore"
  });
  // map animation
  marker.addListener("click", toggleBounce);
}
// map animation function
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

// map end

//service worker code starts here
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    .then(function(reg) {
      console.log("Registration succeeded." + reg.scope);
    })
    .catch(function(err) {
      console.log("Registration failed with " + err);
    });
}
