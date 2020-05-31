function initMap() {
	//Map options
	let options = {
		zoom: 3,
		center: {
			lat: 53.3498,
			lng: -6.2603
		}
	}
	//New map
	let map = new google.maps.Map(document.getElementById('map'), options);


	//Array of markers

	let markers = [{
			coords: {
				lat: 25.122318,
				lng: 55.132433
			},
            content:       
            `<h6>Palm Jumeirah in Dubai</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 36.176333,
				lng: -112.460353
			},
            content: `<h6>Grand Canyon</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -16.356378,
				lng: 145.804226
			},
            content: `<h6>Great Barrier Reef</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 43.979102,
				lng: 15.381623
			},
            content: `<h6>The Lovers Island</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 43.077769,
				lng: -79.076075
			},
            content: `<h6>Niagara Falls</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 28.044935,
				lng: 86.276308
			},
            content: `<h6>Mount Everest</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 23.993574,
				lng: -77.759123
			},
            content: `<h6>The Bahamas</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 70.492972,
				lng: -156.232523
			},
            content: `<h6>Alaska North Slopes</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -32.023812,
				lng: 135.370051
			},
            content: `<h6>Acraman Lake, Australia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 27.3638,
				lng: 37.9497
			},
            content: `<h6>Kiritimati</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 51.4200,
				lng: -116.2259
			},
            content: `<h6>Lake Louise (North Lakeside）</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 27.1751496,
				lng: 78.0399535
			},
            content: `<h6>Taj Mahal, India</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 35.3606,
				lng: 138.7186
			},
            content: `<h6>Mount Fuji, Japan</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -23.6473,
				lng: 15.1851
			},
            content: `<h6>Namib-Naukluft National Park, Namibia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -20.20866,
				lng: -67.8721
			},
            content: `<h6>Salar de Uyuni Salt Flats, Bolivia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 21.1722,
				lng: 94.8544
			},
            content: `<h6>Bagan, Myanmar</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 67.9307,
				lng: 13.08510
			},
            content: `<h6>Reine, Norway</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -28.2277,
				lng: 107.0795
			},
            content: `<h6>Ha Long Bay, Vietnam</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -33.9520,
				lng: 18.3736
			},
            content: `<h6>Camps Bay, South Africa</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -44.6230,
				lng: 167.7842
			},
            content: `<h6>Milford Sound, New Zealand</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -2.3333,
				lng: 34.8311
			},
            content: `<h6>Serengeti National Park, Tanzania</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 35.1710,
				lng: -5.2884
			},
            content: `<h6>Chefchaouen, Morocco</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -38.66209,
				lng: 143.1029
			},
            content: `<h6>Twelve Apostles, Australia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 47.5575,
				lng: 10.74761
			},
            content: `<h6>Neuschwanstein Castle, Germany</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 23.0664,
				lng: 102.6968
			},
            content: `<h6>Rice Terraces (Yuanyuang), China</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 44.5251,
				lng: -110.8403
			},
            content: `<h6>Grand Prismatic Spring, USA</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -13.16313,
				lng: -72.5471
			},
            content: `<h6>Machu Picchu, Peru</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 22.3476,
				lng: 103.7994
			},
            content: `<h6>Sa Pa, Vietnam</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 5.44036,
				lng: 130.8001
			},
            content: `<h6>Palau, Palau</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 44.8654,
				lng: 15.57982
			},
            content: `<h6>Plitvice Lakes National Park, Croatia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 63.61560,
				lng: -19.99069
			},
            content: `<h6>Seljalandsfoss, Iceland</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -16.5979,
				lng: 143.6004
			},
            content: `<h6>Great Barrier Reef, Australia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -44.0084,
				lng: 170.4555
			},
            content: `<h6>Lake Tekapo, New Zealand</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 43.80001,
				lng: 6.04124
			},
            content: `<h6>Plateau de Valensole, Alpes de Haute-Provence, France</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -34.0949,
				lng: 123.1940
			},
            content: `<h6>Lake Hillier, Australia</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 66.3407,
				lng: 14.4945
			},
            content: `<h6>Aurora Sky Station, Sweden</h6><button type="submit" id="Sweden"></button>`
		},

		{
			coords: {
				lat: 36.8825,
				lng: -111.4118
			},
            content: `<h6>Antelope Canyon, USA</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 35.0094,
				lng: 135.6645
			},
            content: `<h6>Arashiyama Bamboo Forest, Japan</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 38.9180,
				lng: 100.3312
			},
            content: `<h6>Rainbow Mountains of Zhangye Danxia, China</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 61.8989,
				lng: -7.514715
			},
            content: `<h6>Faroe Islands, Denmark</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 22.05209,
				lng: -159.68022
			},
            content: `<h6>Kauai, Hawaii</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 43.351702,
				lng: 9.90800
			},
            content: `<h6>Tuscan Countryside, Italy</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 64.3816,
				lng: -17.25183
			},
            content: `<h6>Vatnajökull Ice Cave in Skaftafell National Park, Iceland</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: 36.4072,
				lng: 25.3505
			},
            content: `<h6>Santorini, Greece</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		},

		{
			coords: {
				lat: -38.2608,
				lng: 175.1013
			},
            content: `<h6>Waitomo Glowworm Cave, New Zealand</h6><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
		}

    ];
    
   
    

	// Loop through markers

	for (var i = 0; i < markers.length; i++) {
		addMarker(markers[i])
	}

	//Add Marker Function

	function addMarker(props) {
		let marker = new google.maps.Marker({
			position: props.coords,
			map: map,

		});
		//check content
		// if (props.content) {
		// 	let infoWindow = new google.maps.InfoWindow({
		// 		content: props.content
		// 	});
		// 	marker.addListener('click', function () {
        //         infoWindow.open(map, marker);
                
                

        //     });
            
            
        // }


        google.maps.event.addListener(marker, 'click', function() {
    if(!marker.open){
        infoWindow.open(map,marker);
        marker.open = true;
    }
    else{
        infoWindow.close();
        marker.open = false;
    }
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
        marker.open = false;
    });
});

    }
    



}

