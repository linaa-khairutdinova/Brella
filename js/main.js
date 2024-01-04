$(document).ready(function(){
  $('.slider').slick({
    arrow: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed:1000,
    easing:'ease',
    autoplay: true,
    infinite: true,
    autoplaySpeed:1500,
    pauseOnDotsHover: true,
    draggable: true,
    centerMode: true,
    responsive:[
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  });
});