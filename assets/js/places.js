

$.getJSON('https://api.unsplash.com/search/photos?query=dublin&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0', function(data) {
  console.log(data);
  let imageList = data.results;
  
  $.each(data, function(i,value){
      console.log(i, value);
  });
  
  $.each(imageList, function(i, val) { 
    let imageURL = val.urls.regular;
    return  $('ul.output').append('<img src="'+ imageURL +'">') 
  });  

const searchVal = document.getElementById('searchBar').value;
$.each(imageList, function(i, val) { 
    let imageURL = val.urls.regular;
    return  $('section.output').append('<img src="'+ imageURL +'">') 
  });



 
});

var button = document.getElementById('btn');
// when user clicks on button, we want to call function start search
button.addEventListener('click', startSearch);

function startSearch(event) {

  var userInputValue = document.getElementById('searchBar').value;
 
  var urlBase = 'https://api.unsplash.com/search/photos?query=dublin&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0'
 
  if (userInputValue === null || userInputValue === '') return;
 
  var searchUrl = urlBase + userInputValue;
  
  performSearch(searchUrl);
}

function performSearch(searchUrl) {
  
  var requestData = new XMLHttpRequest();
  
  requestData.addEventListener('load', handleResults);
  requestData.open('GET', searchUrl);
  requestData.send();
}

function handleResults() {
 
  var responseJSON = JSON.parse(this.response);
  
  if (responseJSON.error) console.log('Character not found');
  else {
    var html = '';
     {
      html += '<img src="'+ imageURL +'">';

    }
   
   
  }
}




