import "./index.scss";

function init_map() {
  var position = new google.maps.LatLng(27.686149, 85.331765);
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({map: map, position: position});
}

window.init_map = init_map;

// google.maps.event.addDomListener(window, 'load', init_map);