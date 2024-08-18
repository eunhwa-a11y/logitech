/* MENU */

let menus = document.querySelectorAll('.top_nav > nav > ul > li');
let topNav = document.querySelector('.top_nav')
let topNavOrgHeight = topNav.offsetHeight;


menus.forEach(item => {
  
  item.addEventListener('mouseenter', () => {
    let subMenuHeight = item.querySelector('ul').offsetHeight;
    topNav.style.height = subMenuHeight + topNavOrgHeight + 'px';
  });

  item.addEventListener('mouseleave', () => {
    topNav.style.height = topNavOrgHeight + 'px';
  });
});


/* PAGE SCROLL */


const body = document.querySelector('body');
const sections = body.querySelectorAll('.section');
const footer = document.querySelector('footer .container');
let page = 0;
const upBtn = document.querySelector('header button .fa-angles-up');
const downBtn = document.querySelector('header button .fa-angles-down');

function pageMove(num){

  if (num >= 0) {
    if (num < sections.length) {
        body.style.top = `${-num * 100}vh`;
        page = num;
    }
  }
}

downBtn.addEventListener('click', () => {
  pageMove(page + 1);
})

upBtn.addEventListener('click', () => {
  pageMove(page - 1);
})

window.addEventListener('scroll', () => {
  if(scrollY > 0){
    pageMove(page + 1);
  }else if(scrollY < 0){
    pageMove(page -1);
  }
})


/* MAIN FORM */

const form = document.querySelector('main form');

form.addEventListener('click', (e) => {
  e.preventDefault();

  form.classList.toggle('search');
})


/* MAIN SlIDE */


const slideWrapper = document.querySelector('.slide-wrapper');
const slideContainer = slideWrapper.querySelector('.slide-container');
const slides = slideContainer.querySelectorAll('.slide-container li');
const slideCount = slides.length;
const slideWidth = 400;
const slideGap = 88;
const maxSlides = 3;
let currentIdx = 0;
const pager = slideWrapper.querySelector('.pager');
const pagerLeft = slideWrapper.querySelector('.pager .left');
const pagerRight = slideWrapper.querySelector('.pager .right');



slideContainer.style.width = (slideWidth*slideCount)+(slideGap*(slideCount))+'px';

function moveSlide(num){
  console.log(`슬라이드 이동: ${num}`);
  
  slideContainer.style.left = `${num*-(slideWidth+slideGap)*maxSlides}px`;
  currentIdx = num;

  updatePager();
}




pagerRight.addEventListener('click', (e) => {
  e.preventDefault();
  
  if(currentIdx < (slideCount - maxSlides)) {
    moveSlide(currentIdx + 1);
  }
});

pagerLeft.addEventListener('click', (e) => {
  e.preventDefault();
  
  if(currentIdx > 0) {
    moveSlide(currentIdx - 1);
  }
});

const pagerBtn = pager.querySelectorAll('a');

function updatePager(){
  
  for(let pager of pagerBtn){
    pager.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');

}


/* FOOTER SlIDE */

const ssSlideWrapper = document.querySelector('.ss-slide-wrapper');
const ssSlideContainer = ssSlideWrapper.querySelector('.ss-slide-container');
let ssSlides = ssSlideContainer.querySelectorAll('.ss-slide-container li');
const ssSlideCount = ssSlides.length;
let ssCurrentIdx = 0;
let timer;
let ssSlideWidth = ssSlideWrapper.offsetWidth;


ssSlideContainer.style.transform = `translateX(-${ssSlideWidth*ssSlideCount}px)`;

// 슬라이드 복사본

for(let i = 0; i < ssSlideCount; i++){
  let cloneSlide = ssSlides[i].cloneNode(`true`); 
  cloneSlide.classList.add('clone');  
  ssSlideContainer.prepend(cloneSlide); 
}

// 슬라이드 복사본 포함 배치

let allSsSlides = ssSlideContainer.querySelectorAll('.ss-slide-container li');

allSsSlides.forEach((slide, idx) => {
  slide.style.left = `${idx * 100}%`
})


// 자동 슬라이드

function goToSlide(num) {
  ssSlideContainer.style.left = `-${num * 100}%`;
  ssCurrentIdx = num;
}

function AutoSlide() {
  timer = setInterval(() => {
    let nextIdx = (ssCurrentIdx + 1) % ssSlideCount;
    goToSlide(nextIdx);
  }, 4000);
}

AutoSlide();