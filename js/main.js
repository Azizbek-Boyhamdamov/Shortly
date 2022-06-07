const elMenu = document.querySelector('.menu');
const elHeaderMenu = document.querySelector('.site-header__menu');

elHeaderMenu.addEventListener('click',function(){
  elMenu.classList.toggle('menu-opener');
});