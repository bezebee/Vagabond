function initMap() {
  var myLatLng = {lat: 60.1282, lng: 18.6435};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Sweden'
  });
}

