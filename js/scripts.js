// Example starter JavaScript for disabling form submissions if there are invalid fields
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

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
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./js/sw/sw.js")
//     .then(function(reg) {
//       console.log("Registration succeeded. Scope is " + reg.scope);
//     })
//     .catch(function(err) {
//       console.log("Registration failed with " + error);
//     });
// }
