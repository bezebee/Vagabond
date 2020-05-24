const API_CLIENTID = 'kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0'
const form = document.querySelector('form');
const input = document.querySelector('input');
const imageSection = document.querySelector('.images');
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${API_CLIENTID};rel="first",
https://api.unsplash.com/search/photos?page=2&per_page=20&client_id=${API_CLIENTID};rel="next",

https://api.unsplash.com/search/photos?page=20&per_page=20&client_id=${API_CLIENTID};rel="last"`

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

function search(searchTerm) {
  let url = `${API_URL}&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.results;
    });
}

function displayImages(images) {
  images.forEach(image => {
    let imageContainer = document.createElement('div');
    imageContainer.className = 'ImageResult col-12 text-center .img-fluid'
    imageContainer.innerHTML = `<img src="${image.urls.regular}"
     <a href="${image.links.html}" target="_blank" class="view_link col-12">View on Unsplash</a>`
    imageSection.appendChild(imageContainer);

  });
}

