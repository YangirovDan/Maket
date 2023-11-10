//Код для бургер меню Хэдера

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
    // Если бургер-меню открыто, скроллинг заблокирован
    if (document.querySelector("header").classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      // Если бургер-меню закрыто, скроллинг разблокирован
      document.body.style.overflow = "auto";
    }
  });
});

//Код для свайпера

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  slidesPerView: 1.5,
  spaceBetween: 23,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});

//Открываем модальное окно
document.getElementById("open-modal-btn").addEventListener("click",function(){
  document.getElementById("my-modalIrina").classList.add("open");
  document.body.classList.add('no-scroll')
})

//Закрываем модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click",function(){
  document.getElementById("my-modalIrina").classList.remove("open");
  document.body.classList.remove('no-scroll')
})

document.getElementById("close-my-modal-btn--adaptive").addEventListener("click",function(){
  document.getElementById("my-modalIrina").classList.remove("open");
  document.body.classList.remove('no-scroll')
})

// Закрыть модальное окно при нажатии Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modalIrina").classList.remove("open");
    document.body.classList.remove('no-scroll')
  }
})

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalIrina .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modalIrina").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove('no-scroll')
})





//Открываем модальное окно
document.getElementById("open-modal-btn--Marina").addEventListener("click",function(){
  document.getElementById("my-modalMarina").classList.add("open");
  document.body.classList.add('no-scroll')
})

//Закрываем модальное окно
document.getElementById("close-my-modal-btn--Marina").addEventListener("click",function(){
  document.getElementById("my-modalMarina").classList.remove("open");
  document.body.classList.remove('no-scroll');
})

document.getElementById("close-my-modal-btn--adaptiveMarina").addEventListener("click",function(){
  document.getElementById("my-modalMarina").classList.remove("open");
  document.body.classList.remove('no-scroll')
})

// Закрыть модальное окно при нажатии Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modalMarina").classList.remove("open");
    document.body.classList.remove('no-scroll')
  }
})

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalMarina .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modalMarina").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.body.classList.remove('no-scroll')
})


const tabButtons = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('tabs__btn-item--active'));
    tabContents.forEach(content => content.classList.remove('tabs__content-item--active'));

    button.classList.add('tabs__btn-item--active')

    const tabId = button.getAttribute('data-button');

    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('tabs__content-item--active')
  })
})


//Дропдаун
const dropDownBtn = document.querySelector('.dropdown__button');
const dropDownList = document.querySelector('.dropdown__list');

dropDownBtn.addEventListener('click', function(){
  dropDownList.classList.toggle('dropdown__list--visible')
});

document.querySelectorAll('.tabs__btn-item').forEach(function(listItem){
  listItem.addEventListener('click', function(e){
    e.stopPropagation();
    dropDownBtn.innerText = this.innerText
    dropDownList.classList.remove('dropdown__list--visible')
  })
})

//Клик снаружи дропдауна-закрывает его
document.addEventListener('click', function(e) {
  console.log('Document Click')
  if ( e.target !==  document.querySelector('.dropdown__button')) {
    dropDownList.classList.remove('dropdown__list--visible')
  }
})