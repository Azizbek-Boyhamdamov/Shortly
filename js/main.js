const elMenu = document.querySelector('.menu');
const elHeaderMenu = document.querySelector('.site-header__menu');

elHeaderMenu.addEventListener('click',function(){
  elMenu.classList.toggle('menu-opener');
});

const elUrlShortenerForm = document.querySelector( '.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');

elUrlShortenerForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  elUrlShortenerResults.classList.add('url-shortener__results--open');
});

window.addEventListener('click',function(){
  elUrlShortenerResults.classList.remove('url-shortener__results--open');
});