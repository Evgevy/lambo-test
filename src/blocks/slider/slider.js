$(document).ready(function(){
  $(".slider__swiper-wrapper").slick({
    prevArrow: '.slider__swiper-button-prev',
    nextArrow: '.slider__swiper-button-next',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
          
          
        }
      }
    ]
    
  })

})


   
  
