var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});


function ibg() {
   let ibg = document.querySelectorAll("._ibg");
   for (var i = 0; i < ibg.length; i++) {
     if (ibg[i].querySelector("img")) {
       ibg[i].style.backgroundImage =
         "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
         console.log("ok");
     }
   }
 }
 
 ibg();

 let  icon_menu = document.querySelector('.icon-menu');

icon_menu.addEventListener("click",function(e){
   icon_menu.classList.toggle('active');
    let menu_body = document.querySelector('.menu__body');
    menu_body.classList.toggle('active');
    let body = document.querySelector('body');
    body.classList.toggle('lock');

 });
