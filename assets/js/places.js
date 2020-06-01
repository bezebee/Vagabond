function initMap() {
  //Map options
  let options = {
    zoom: 3,
    center: {
      lat: 53.3498,
      lng: -6.2603,
    },
  };
  //New map
  let map = new google.maps.Map(document.getElementById("map"), options);

  //Array of markers

  let markers = [
    {
      coords: {
        lat: 25.122318,
        lng: 55.132433,
      },
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Palm Jumeirah in Dubai</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 36.176333,
        lng: -112.460353,
      },//Grand Canyon
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Grand Canyon Colorado</p>
    <img src="assets/BucketImg/Canyon.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/things-to-do/arizona" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/search?keyword=grand+canyon+national+park&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -16.356378,
        lng: 145.804226,
      },//Great Barrier Reef
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Great Barrier Reef</p>
    <img src="assets/BucketImg/Barrier.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.nomadicmatt.com/travel-blogs/diving-the-great-barrier-reef/" target="_blank" class="btn btn-outline-info">Nomadic Matt</a>
    <a href="https://www.intrepidtravel.com/ie/search?keyword=Great+Barrier+Reef&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 43.979102,
        lng: 15.381623,
      },//The Lovers Island
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Galesnjak - The Lover's Island</p>
    <img src="assets/BucketImg/Galesnjak.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/galesnjak-island" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/search?keyword=Croatia&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 43.077769,
        lng: -79.076075,
      },//Niagara Falls
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Niagara Falls</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.earthtrekkers.com/48-hours-niagara-falls/" target="_blank" class="btn btn-outline-info">Earth Trekkers</a>
    <a href="https://www.intrepidtravel.com/ie/search?keyword=Niagara&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 28.044935,
        lng: 86.276308,
      },//Mount Everest
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Mount Everest</p>
    <img src="assets/BucketImg/Everest.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="http://www.everest3d.de/" target="_blank" class="btn btn-outline-info">Everest 3D</a>
    <a href="https://www.intrepidtravel.com/ie/search?keyword=Mount+Everest&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 23.993574,
        lng: -77.759123,
      },//The Bahamas
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">The Bahamas</p>
    <img src="assets/BucketImg/Pigs.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/things-to-do/the-bahamas" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/bahamas/bahamas-sailing-adventure-125008" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 58.4409564,
        lng: -134.554618,
      },//Mendenhall Ice Caves
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Mendenhall Ice Caves</p>
    <img src="assets/BucketImg/Alaska.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    

    {
      coords: {
        lat: 51.42,
        lng: -116.2259,
      },//Lake Louise (North Lakeside）
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Lake Louise (North Lakeside）</p>
    <img src="assets/BucketImg/LakeLouise.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/yoho-national-park" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=lake+louise&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 27.1751496,
        lng: 78.0399535,
      },//Taj Mahal, India
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Taj Mahal, India</p>
    <img src="assets/BucketImg/TajMahal.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.britannica.com/topic/Taj-Mahal" target="_blank" class="btn btn-outline-info">Britannica</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=taj+mahal&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 35.3606,
        lng: 138.7186,
      },//Mount Fuji, Japan
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Mount Fuji, Japan</p>
    <img src="assets/BucketImg/Fuji.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.japan-guide.com/e/e2172.html" target="_blank" class="btn btn-outline-info">Japan Guide</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=mount+fuji&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -23.6473,
        lng: 15.1851,
      },//Namib-Naukluft National Park, Namibia
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Namib-Naukluft National Park, Namibia</p>
    <img src="assets/BucketImg/Namibia.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/things-to-do/namibia" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Namibia&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -20.20866,
        lng: -67.8721,
      },//Salar de Uyuni Salt Flats, Bolivia
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Salar de Uyuni Salt Flats, Bolivia</p>
    <img src="assets/BucketImg/Bolivia.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/salar-de-uyuni-bolivian-salt-flat" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/bolivia/bolivian-salt-flats-andean-desert-short-break-124116" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 21.1722,
        lng: 94.8544,
      },//Bagan, Myanmar
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Bagan, Myanmar</p>
    <img src="assets/BucketImg/Myanmar.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/bagan" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=bagan&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 67.9307,
        lng: 13.0851,
      },//Reine, Norway
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Reine, Norway</p>
    <img src="assets/BucketImg/Reine.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/lofoten-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/norway/northern-norway-explorer-123840" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -28.2277,
        lng: 107.0795,
      },//Ha Long Bay, Vietnam
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Ha Long Bay, Vietnam</p>
    <img src="assets/BucketImg/HaLongBay.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.visithalongbay.com/" target="_blank" class="btn btn-outline-info">Visit Halong Bay</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=ha+long+bay&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -33.952,
        lng: 18.3736,
      },//Camps Bay, South Africa
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Camps Bay, South Africa</p>
    <img src="assets/BucketImg/CampsBay.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.mansionglobal.com/articles/cape-towns-camps-bay-is-all-about-the-ocean-views-and-the-beach-lifestyle-205279" target="_blank" class="btn btn-outline-info">Mansion Global</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -44.623,
        lng: 167.7842,
      },//Milford Sound, New Zealand
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Milford Sound, New Zealand</p>
    <img src="assets/BucketImg/Milford.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/milford-sound" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=milford+sound&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -2.3333,
        lng: 34.8311,
      },//Serengeti National Park, Tanzania
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Serengeti National Park, Tanzania</p>
    <img src="assets/BucketImg/Serengeti.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Serengeti&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 35.171,
        lng: -5.2884,
      },//Chefchaouen, Morocco
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Chefchaouen, Morocco</p>
    <img src="assets/BucketImg/Chefchaouen.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/chefchaouen" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Chefchaouen&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -38.66209,
        lng: 143.1029,
      },//Twelve Apostles, Australia
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Twelve Apostles, Australia</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/loch-ard-gorge" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/australia/great-ocean-road-adventure-ex-adelaide-127964" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 47.5575,
        lng: 10.74761,
      },//Neuschwanstein Castle, Germany
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Neuschwanstein Castle, Germany</p>
    <img src="assets/BucketImg/Castle.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/neuschwanstein-castle" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/germany" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 23.0664,
        lng: 102.6968,
      },//Rice Terraces (Yuanyuang), China
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Rice Terraces (Yuanyuang), China</p>
    <img src="assets/BucketImg/RiceTerraces.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/honghe-hani-rice-terraces" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.chinadiscovery.com/yuanyang-tours.html" target="_blank" class="btn btn-outline-info">China Discovery</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 44.5251,
        lng: -110.8403,
      },//Grand Prismatic Spring, USA
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Grand Prismatic Spring, USA</p>
    <img src="assets/BucketImg/GrandPrismatic.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/grand-prismatic-spring" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.viator.com/Yellowstone-National-Park-attractions/Grand-Prismatic-Spring/d22411-a21473" target="_blank" class="btn btn-outline-info">Viator</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -13.16313,
        lng: -72.5471,
      },//Machu Picchu, Peru
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Machu Picchu, Peru</p>
    <img src="assets/BucketImg/MachuPicchu.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/stonework-machu-picchu" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=machu+pichu&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 22.3476,
        lng: 103.7994,
      },//Sa Pa, Vietnam
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Sa Pa, Vietnam</p>
    <img src="assets/BucketImg/Sapa.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.thecrazytourist.com/25-best-things-to-do-in-sapa-vietnam/" target="_blank" class="btn btn-outline-info">The Crazy Tourist</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=sapa+vietnam&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 5.44036,
        lng: 130.8001,
      },//Palau, Palau
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Palau, Palau</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 44.8654,
        lng: 15.57982,
      },//Plitvice Lakes National Park, Croatia
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Plitvice Lakes National Park, Croatia</p>
    <img src="assets/BucketImg/Plitvice.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.visit-croatia.co.uk/croatia-destinations/plitvice-lakes/" target="_blank" class="btn btn-outline-info">Visit Croatia</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Plitvice&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 63.6156,
        lng: -19.99069,
      },//Seljalandsfoss, Iceland
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Seljalandsfoss, Iceland</p>
    <img src="assets/BucketImg/Seljalandsfoss.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Seljalandsfoss&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

   

    {
      coords: {
        lat: -44.0084,
        lng: 170.4555,
      },//Lake Tekapo, New Zealand
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Lake Tekapo, New Zealand</p>
    <img src="assets/BucketImg/Tekapo.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/lake-tekapo-south-island-new-zealand" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.kimkim.com/ab/getting-to-lake-tekapo" target="_blank" class="btn btn-outline-info">Kimkim</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 43.80001,
        lng: 6.04124,
      },//Plateau de Valensole, Alpes de Haute-Provence, France
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Plateau de Valensole, Alpes de Haute-Provence, France</p>
    <img src="assets/BucketImg/Lavender.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.farmstayplanet.com/farm-stay-rural-travel-guides/france/lavender-provence/" target="_blank" class="btn btn-outline-info">Farm Stay Planet</a>
    <a href="https://www.viator.com/Provence-tourism/Lavender-Fields-Tours-in-Provence/d184-t3318" target="_blank" class="btn btn-outline-info">Viator</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -34.0949,
        lng: 123.194,
      },//Lake Hillier, Australia
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Lake Hillier, Australia</p>
    <img src="assets/BucketImg/Pink.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/lake-hillier" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://scenicflightbooker.com/lake-hillier" target="_blank" class="btn btn-outline-info">Scenic Flight Booker</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 66.3407,
        lng: 14.4945,
      },//Aurora Sky Station, Sweden
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Aurora Sky Station, Sweden</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.auroraskystation.com/en/live/" target="_blank" class="btn btn-outline-info">Aurora Sky Station</a>
    <a href="https://www.tripadvisor.ie/Attraction_Review-g774912-d645638-Reviews-Aurora_Sky_Station-Abisko_Norrbotten_County.html" target="_blank" class="btn btn-outline-info">Trip Advisor</a>
    </div>
    </div>
  </div>
</div>`,
    },

   

    {
      coords: {
        lat: 35.0094,
        lng: 135.6645,
      },//Arashiyama Bamboo Forest, Japan
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Arashiyama Bamboo Forest, Japan</p>
    <img src="assets/BucketImg/Bamboo.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/sagano-bamboo-forest" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/japan/cycle-japan-124417" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 38.918,
        lng: 100.3312,
      },//Rainbow Mountains of Zhangye Danxia, China
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Rainbow Mountains of Zhangye Danxia, China</p>
    <img src="assets/BucketImg/Rainbow.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/zhangye-national-geopark" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Zhangye+Danxia&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 61.8989,
        lng: -7.514715,
      },//Faroe Islands, Denmark
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Faroe Islands, Denmark</p>
    <img src="assets/BucketImg/Faroe.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/things-to-do/faroe-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Faroe&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 22.05209,
        lng: -159.68022,
      },//Kauai, Hawaii
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Kauai, Hawaii</p>
    <img src="assets/BucketImg/Kauai.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/things-to-do/faroe-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=Faroe&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 43.351702,
        lng: 9.908,
      },//Tuscan Countryside, Italy
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Tuscan Countryside, Italy</p>
    <img src="assets/BucketImg/Tuscany.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://travelpassionate.com/45-things-to-do-in-tuscany/" target="_blank" class="btn btn-outline-info">Travel Passionate</a>
    <a href="https://www.intrepidtravel.com/en/search?keyword=tuscany&page=1&sort=relevance" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 64.3816,
        lng: -17.25183,
      },//Vatnajökull Ice Cave in Skaftafell National Park, Iceland
      content:`<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Vatnajökull Ice Cave in Skaftafell National Park, Iceland</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: 36.4072,
        lng: 25.3505,
      },//Santorini, Greece
      content: `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Santorini, Greece</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },

    {
      coords: {
        lat: -38.2608,
        lng: 175.1013,
      },//Waitomo Glowworm Cave, New Zealand
      content:  `<div class="card" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-title places">Santorini, Greece</p>
    <img src="assets/BucketImg/Palm-Jumeirah.jpg" class="img-fluid" style="max-width:100%">
    <div class="container d-inline ">
    <div class="row places">
    <a href="https://www.atlasobscura.com/places/world-islands" target="_blank" class="btn btn-outline-info">Atlas Obscura</a>
    <a href="https://www.intrepidtravel.com/ie/united-arab-emirates/dubai-discovery-127174" target="_blank" class="btn btn-outline-info">Intrepid Travel</a>
    </div>
    </div>
  </div>
</div>`,
    },
  ];

  // Loop through markers

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  //Add Marker Function

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });
    //check content
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });

      //Close info window on on click on the map

      closeInfoWindow = function () {
        infoWindow.close();
      };

      google.maps.event.addListener(map, "click", closeInfoWindow);
    }
  }
}
