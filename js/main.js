const elMenu = document.querySelector('.menu');
const elHeaderMenu = document.querySelector('.site-header__menu');
const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector( '.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');
const elCopyUrlShortLinkButton = document.querySelector('.js-copy-short-link-button');

// Menu event listener

elHeaderMenu.addEventListener('click',function(){
  elMenu.classList.toggle('menu-opener');
});


// Url Shortener event listener

if (elUrlShortenerForm){
  elUrlShortenerForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    elUrlShortenerResults.classList.add('url-shortener__results--open');
  });
}

if(elUrlShortener){
  elUrlShortener.addEventListener("click", function(evt){
    if(evt.target.matches('.js-copy-short-link-button')){
      // Change button content
      evt.target.textContent = "Copied!";

      // Change button bg-color

      evt.target.classList.add('url-shortener__copy-btn--copied');

      // Reset button text and class after 1 second

          setTimeout(()=>{
            evt.target.textContent = 'Copy';
            evt.target.classList.remove ('url-shortener__copy-btn--copied');
            },2000);

    }
  });
}
// Window event listener
// if(window){
//   document.addEventListener('click',function(){
//     elUrlShortenerResults.classList.remove('url-shortener__results--open');
//   });

// }

