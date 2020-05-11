


$.getJSON('https://api.unsplash.com/search/photos?query=dublin&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0', function(data) {
  console.log(data);
  let imageList = data.results;
 

  $.each(data, function(index,value){
      console.log(value);
  });
  
  $.each(imageList, function(i, val) {
    
    
    let imageURL = val.urls.regular;
    let imageWidth = val.width;
    let imageHeight = val.height;
   
    
    if (imageWidth > imageHeight) {
      $('header.output').append('<div class="div.image-api"><img src="'+ imageURL +'"></div>');
    }   
    
  });  


});


