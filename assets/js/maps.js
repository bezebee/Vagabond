let markers = [
  {
    Coord1: 33.9391,
    Coord2: 67.71,
    place_name: "afganistan",
  },
];
//Function initializing multiple maps for this page
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

//Storing variables in each of the called earlier map
//Afganistan map
function initMap() {
  let latlng = new google.maps.LatLng(33.9391, 67.71);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(
    document.getElementById("afganistan"),
    myOptions
  );
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers.length; i++) {
    lat = markers[i].Coord1;
    lng = markers[i].Coord2;
    name = markers[i].place_name;

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
let markers2 = [
  {
    Coord1: 4.6482837,
    Coord2: -74.2478945,
    place_name: "colombia",
  },
];

function initMap2() {
  let latlng = new google.maps.LatLng(4.6482837, -74.2478945);
  let myOptions = {
    zoom: 2,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("colombia"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers2.length; i++) {
    lat = markers2[i].Coord1;
    lng = markers2[i].Coord2;
    name = markers2[i].place_name;

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
let markers3 = [
  {
    Coord1: 51.1657,
    Coord2: 10.4515,
    place_name: "Germany",
  },
];

function initMap3() {
  let latlng = new google.maps.LatLng(51.1657, 10.4515);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("germany"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers3.length; i++) {
    lat = markers3[i].Coord1;
    lng = markers3[i].Coord2;
    name = markers3[i].place_name;

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
let markers4 = [
  {
    Coord1: 48.8589507,
    Coord2: 2.2770204,
    place_name: "France",
  },
];

function initMap4() {
  let latlng = new google.maps.LatLng(48.8589507, 2.2770204);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("france"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers4.length; i++) {
    lat = markers4[i].Coord1;
    lng = markers4[i].Coord2;
    name = markers4[i].place_name;

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

//Ghana map
let markers5 = [
  {
    Coord1: 6.690251,
    Coord2: -1.6861462,
    place_name: "Ghana",
  },
];

function initMap5() {
  let latlng = new google.maps.LatLng(6.690251, -1.6861462);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("ghana"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers5.length; i++) {
    lat = markers5[i].Coord1;
    lng = markers5[i].Coord2;
    name = markers5[i].place_name;

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

//Iceland map

let markers6 = [
  {
    Coord1: 64.1335484,
    Coord2: -21.9224813,
    place_name: "Iceland",
  },
];

function initMap6() {
  let latlng = new google.maps.LatLng(64.1335484, -21.9224813);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("iceland"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers6.length; i++) {
    lat = markers6[i].Coord1;
    lng = markers6[i].Coord2;
    name = markers6[i].place_name;

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

//Ireland

let markers7 = [
  {
    Coord1: 53.3244431,
    Coord2: -6.3857857,
    place_name: "Ireland",
  },
];

function initMap7() {
  let latlng = new google.maps.LatLng(53.3244431, -6.3857857);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("ireland"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers7.length; i++) {
    lat = markers7[i].Coord1;
    lng = markers7[i].Coord2;
    name = markers7[i].place_name;

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

//Japan

let markers8 = [
  {
    Coord1: 35.6684415,
    Coord2: 139.6007843,
    place_name: "Japan",
  },
];

function initMap8() {
  let latlng = new google.maps.LatLng(35.6684415, 139.6007843);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("japan"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers8.length; i++) {
    lat = markers8[i].Coord1;
    lng = markers8[i].Coord2;
    name = markers8[i].place_name;

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

//Latin America

let markers9 = [
  {
    Coord1: -5.7379831,
    Coord2: -64.1876637,
    place_name: "Latin America",
  },
];

function initMap9() {
  let latlng = new google.maps.LatLng(-5.7379831, -64.1876637);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(
    document.getElementById("latinamerica"),
    myOptions
  );
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers9.length; i++) {
    lat = markers9[i].Coord1;
    lng = markers9[i].Coord2;
    name = markers9[i].place_name;

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

//New York

let markers10 = [
  {
    Coord1: 40.6971494,
    Coord2: -74.2598655,
    place_name: "New York",
  },
];

function initMap10() {
  let latlng = new google.maps.LatLng(40.6971494, -74.2598655);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("newyork"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers10.length; i++) {
    lat = markers10[i].Coord1;
    lng = markers10[i].Coord2;
    name = markers10[i].place_name;

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

//Russia

let markers11 = [
  {
    Coord1: 55.5815245,
    Coord2: 36.8251381,
    place_name: "Russia",
  },
];

function initMap11() {
  let latlng = new google.maps.LatLng(55.5815245, 36.8251381);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("russia"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers11.length; i++) {
    lat = markers11[i].Coord1;
    lng = markers11[i].Coord2;
    name = markers11[i].place_name;

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

//China

let markers12 = [
  {
    Coord1: 39.9390731,
    Coord2: 116.1172782,
    place_name: "China",
  },
];

function initMap12() {
  let latlng = new google.maps.LatLng(39.9390731, 116.1172782);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("china"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers12.length; i++) {
    lat = markers12[i].Coord1;
    lng = markers12[i].Coord2;
    name = markers12[i].place_name;

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

//Sweden

let markers13 = [
  {
    Coord1: 59.326242,
    Coord2: 17.8419717,
    place_name: "Sweden",
  },
];

function initMap13() {
  let latlng = new google.maps.LatLng(59.326242, 17.8419717);
  let myOptions = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
  };

  let map = new google.maps.Map(document.getElementById("sweden"), myOptions);
  let infowindow = new google.maps.InfoWindow(),
    marker,
    lat,
    lng;

  for (i = 0; i < markers13.length; i++) {
    lat = markers13[i].Coord1;
    lng = markers13[i].Coord2;
    name = markers13[i].place_name;

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

// hover over placemark effect


