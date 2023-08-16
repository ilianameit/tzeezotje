const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const form = document.querySelector("#reserve-form");
const btnReserve = document.querySelector("#reserve");
const close = document.querySelector(".close");
const toggleModal = () => {
    form.classList.toggle('hidden');
};


btnReserve.addEventListener('click', () => {
    toggleModal();
});
close.addEventListener('click', () => {
    toggleModal();
});    
window.addEventListener('click', (evt) => {
  if (evt.target === form) {
    toggleModal();
  }
});

  const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  breakpointsBase: 'container',
  slidesPerView: 1,
  centeredSlides: true,
  setWrapperSize: true,
  
  navigation: {
    prevEl: '.swiper-button-prev',
  },
});

document.querySelector('form').addEventListener('submit', formSubmit);

function formSubmit(evt) {
    evt.preventDefault(); 
    console.log($("#name").val())
  $.ajax({
    url: './index.html',
    dataType: 'html',       
    method: 'get',
    data: { name: $("#name").val(), phone: $("#tel").val() },

    success: function(){
      alert('Работает');
    },
    error: function () {
      alert('Ошибка!')
    }
  });
}

document.querySelector('#header-navigation').addEventListener('click', clickNavItem);

function clickNavItem(evt) {
  evt.preventDefault();
  const target = evt.target;
  const navigationItems = document.querySelectorAll('.navigation--item');
  if(target.classList.contains('navigation--item')){
    for(let i = 0; i < navigationItems.length; i++) {
      navigationItems[i].classList.remove('active');
    }
    target.classList.add('active');
  }

}

document.querySelector('.reserve__list ').addEventListener('click', clickReserveDay);

function clickReserveDay(evt) {
  evt.preventDefault();
  const target = evt.target;
  const listItems = document.querySelectorAll('.reserve__list li');
  if(target.tagName === 'LI'){
    for(let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove('active');
    }
    target.classList.add('active');
  }
}