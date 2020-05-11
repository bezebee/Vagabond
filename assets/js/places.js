// var url;

// var button = document.getElementById('btn1');
// button.addEventListener('click',startSearch);

// function startSearch(event){
//     var userInputValue = document.getElementById('searchBar').value;
//     var urlBase = 'https://api.unsplash.com/search/photos?query=dublin&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0/search/'
//     if (userInputValue === null || userInputValue ==='') return;
//     var searchUrl = urlBase + userInputValue
//     performSearch(searchUrl);
// }

// function performSearch(searchUrl){
//     var requestData = new XMLHttpRequest();
//     requestData.addEventListener('load', handleResults);
//     requestData.open('GET',searchUrl);
//     requestData.send();
// }

// function handleResults(){
//     var responseJSON = JSON.parse(this.response);

//     if(responseJSON.error) console.log("Image not found");
//     else {
//         var html = '';
//         responseJSON.results.forEach(function(result){
//             html+='<div class="div.image-api"><img src="'+ result.image +'"></div>'
//         })
//         document.getElementById(".image-api");
//     }
// }

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


