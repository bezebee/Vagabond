

 $("button#asia").click(function(){
$.getJSON('https://api.unsplash.com/search/photos?query=asia&per_page=30&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0', function(data) {
console.log(data);

var imageList = data.results;

$.each(imageList, function(i, val){

    var image = data.results;

    var imageURL = val.urls.regular;
    var imageWidth = val.width;
    var imageHeight = val.height;

    if(imageWidth>imageHeight){
        $('.output').append('<div class="image"><img src="'+ imageURL +'"></div>');

};
  });

  })

})
//   $("button#asia").click(function(){

// $.getJSON('https://api.unsplash.com/search/photos?query=asia&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0', function(data) {
// console.log(data);

// var imageList = data.results;

// $.each(imageList, function(i, val){

//     var image = data.results[Math.floor(Math.random())]

//     var imageURL = val.urls.regular;
//     var imageWidth = val.width;
//     var imageHeight = val.height;

//     if(imageWidth>imageHeight){
//         $('.output').append('<div class="image"><img src="'+ imageURL +'"></div>');
//     }else{$('.output').append('<div class="image"><img src="'+ imageURL +'"></div>')}
// });
//   });

//   })
