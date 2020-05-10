

$.getJSON('https://api.unsplash.com/search/photos?query=dublin&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0', function(data) {
  console.log(data);
  
  
  var imageList = data.results;
  
  $.each(imageList, function(i, val) {
    
    var image = val;
    var imageURL = val.urls.regular;
    var imageWidth = val.width;
    var imageHeight = val.height;
    
    if (imageWidth > imageHeight) {
      $('.row.api').append('<div class="api-gallery"><img src="'+ imageURL +'"></div>');
    }   
    
  });  
});