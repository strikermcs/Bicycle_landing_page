@@include('swiper.min.js');

let sliders = document.querySelectorAll('._swiper');
if(sliders){
    for(let index = 0; index < sliders.length; index++){
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if(slider_items){
                for(let index = 0; index < slider_items.length; index++){
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if(slider.classList.contains('_gallery')){
            //slider.data.('ligthGallary').destroy(true);
        }

    }
    sliders_bild_callback();
   
    
}

function sliders_bild_callback(){



let lots_slider = new Swiper('.slider__body',{
   /* observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    loop: true,
    navigation:{
        nextEl: '.control-slider-lots__arrow_next',
        prevEl: '.control-slider-lots__arrow_prev',
    },

    breakpoints:{

        320:{
            slidesPerView: 1,
        },
        550:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        }
    },

    on:{
        lazyImageReady: function(){
            ibg();
        },
    },*/

    pagination: {
        el: '.swiper-pagination',
        //dynamicBullets: true,
        clickable: true,
      },

});

}

