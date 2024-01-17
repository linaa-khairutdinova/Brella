document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("burger").addEventListener("click", function(){
      document.querySelector("header").classList.toggle("open")
  })
})

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
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 320,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});