document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("burger").addEventListener("click", function(){
      document.querySelector("header").classList.toggle("open")
      document.querySelector("body").classList.toggle("none-scroll")  
  })
})
/*
const titles = document.querySelectorAll(".accordion-title");
const contents = document.querySelectorAll(".accordion-content")

titles.forEach(item => item.addEventListener('click',() =>{
  const activeContent = document.querySelector('#' + item.dataset.tab);

  if(activeContent.classList.contains('active')){
    activeContent.classList.remove('active');
    item.classList.remove('active');
    activeContent.style.maxHeight = 0;
  } else {
    contents.forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
    });
    titles.forEach(element => element.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}))

*/

const titles = document.querySelectorAll(".accordion-title");
const contents = document.querySelectorAll(".accordion-content");

// Открываем первый блок аккордеона по умолчанию
titles[0].classList.add('active');
contents[0].classList.add('active');
contents[0].style.maxHeight = contents[0].scrollHeight + 'px';

titles.forEach(item => item.addEventListener('click', () => {
  const activeContent = document.querySelector('#' + item.dataset.tab);

  if (!activeContent.classList.contains('active')) {
    // Закрываем предыдущий активный контент и заголовок
    const prevActiveContent = document.querySelector('.accordion-content.active');
    const prevActiveTitle = document.querySelector('.accordion-title.active');

    if (prevActiveContent && prevActiveTitle) {
      prevActiveContent.classList.remove('active');
      prevActiveTitle.classList.remove('active');
      prevActiveContent.style.maxHeight = 0;
    }

    // Открываем текущий контент и делаем заголовок активным
    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}));


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