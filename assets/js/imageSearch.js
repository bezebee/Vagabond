//Adapted from equk blog//

const API_MYID = 'kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0'
const form = document.querySelector('form');
const input = document.querySelector('input');
const imageSection = document.querySelector('.images');
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=3&client_id=${API_MYID}`

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  let searchTerm = input.value;

  searchStart();
  search(searchTerm)
    .then(displayImages)
}

function searchStart() {
  imageSection.innerHTML = '';
}

async function search(searchTerm) {
  let url = `${API_URL}&query=${searchTerm}`;
  const response = await fetch(url);
    const result = await response.json();
    return result.results;

    

}

function displayImages(images) {
  images.forEach(image => {
    let imageContainer = document.createElement('div');
    imageContainer.className = 'ImageResult col-12 text-center img-fluid'
    imageContainer.innerHTML = `<img src="${image.urls.regular}">
     <div class="container-fluid text-center">
     <button onclick="location.href='${image.links.html}'"  target="_blank" class="dreamDest btn btn-newsletter">View on Unsplash</a></div>`
    imageSection.appendChild(imageContainer);

  });

}

