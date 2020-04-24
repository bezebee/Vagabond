var markers = [
  {
    Coord1: 33.9391,
    Coord2: 67.71,
    clients_address: "afganistan",
  },
];
//Initializing all of the maps
function initialize() {
  initMap();
  initMap2();
  initMap3();
  initMap4();
  initMap5();
  initMap6();
  initMap7();
  initMap8();
  initMap9();
  initMap10();
  initMap11();
  initMap12();
  initMap13();
}
//Afganistan map
function initMap() {
  var latlng = new google.maps.LatLng(33.9391, 67.71);
  var myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  var map = new google.maps.Map(
    document.getElementById("afganistan"),
    myOptions
  );
  var infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers.length; i++) {
    lat = markers[i].Coord1;
    lng = markers[i].Coord2;
    name = markers[i].client_address;

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      name: name,
      map: map,
    });
    google.maps.event.addListener(
      marker,
      "click",
      function (e) {
        infowindow.setContent(this.name);
        infowindow.open(map, this);
      }.bind(marker)
    );
  }
}
//Colombia map
var markers2 = [
  {
    Coord1: 4.6482837,
    Coord2: -74.2478945,
    client_address: "colombia",
  },
];

function initMap2() {
  var latlng = new google.maps.LatLng(4.6482837, -74.2478945);
  var myOptions = {
    zoom: 2,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  var map = new google.maps.Map(document.getElementById("colombia"), myOptions);
  var infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers2.length; i++) {
    lat = markers2[i].Coord1;
    lng = markers2[i].Coord2;
    name = markers2[i].client_address;

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      name: name,
      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      function (e) {
        infowindow.setContent(this.name);
        infowindow.open(map, this);
      }.bind(marker)
    );
  }
}
//Germany map
var markers3 = [
  {
    Coord1: 51.1657,
    Coord2: 10.4515,
    client_address: "Germany",
  },
];

function initMap3() {
  var latlng = new google.maps.LatLng(51.1657, 10.4515);
  var myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  var map = new google.maps.Map(document.getElementById("germany"), myOptions);
  var infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers3.length; i++) {
    lat = markers3[i].Coord1;
    lng = markers3[i].Coord2;
    name = markers3[i].client_address;

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      name: name,
      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      function (e) {
        infowindow.setContent(this.name);
        infowindow.open(map, this);
      }.bind(marker)
    );
  }
}
//France map
var markers4 = [
  {
    Coord1: 48.8589507,
    Coord2: 2.2770204,
    client_address: "France",
  },
];

function initMap4() {
  var latlng = new google.maps.LatLng(48.8589507, 2.2770204);
  var myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  var map = new google.maps.Map(document.getElementById("france"), myOptions);
  var infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers4.length; i++) {
    lat = markers4[i].Coord1;
    lng = markers4[i].Coord2;
    name = markers4[i].client_address;

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      name: name,
      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      function (e) {
        infowindow.setContent(this.name);
        infowindow.open(map, this);
      }.bind(marker)
    );
  }
}