// map animation function
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            event.preventDefault();
            form.classList.add("was-validated");
            alert(
              JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
              })
            );
          },
          false
        );
      });
    },
    false
  );
})();

// map box script start
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwLXVzZXItMDEiLCJhIjoiY2pubTB5YWQ4MWxyNzN2bzN1ZGtnYTFoOSJ9.HXAlS70ZOjbM5gReUfg0vQ";
var banglore = [77.5946, 12.9716];
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: banglore,
  zoom: 8
});

// Pop to the marker
var popup = new mapboxgl.Popup({ offset: 25 }).setText("Banglore");
var el = document.createElement("div");
el.id = "marker";

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(banglore)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);

// map box script end
