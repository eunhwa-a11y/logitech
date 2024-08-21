/* COOKIE */

const popup = document.querySelector('.cookie');
const check = document.querySelector('#check');
const button = document.querySelector('button');

button.addEventListener('click', () => {

  if(check.checked){
    setCookie('Portfolio', 'resserafim', '1');
  }else{
    delCookie('Portfolio', 'resserafim', '');
  }

  popup.classList.remove('show');

});

function setCookie(name, val, due){

  let date = new Date();
  date.setDate(date.getDate() + due);
  console.log('date');

  let myCookie = `${name} = ${val};expires=` + date.toUTCString();
  document.cookie = myCookie;

}

function delCookie(name, val){

  let date = new Date();
  date.setDate(date.getDate() - 1);
  console.log('date');

  let myCookie = `${name} = ${val};expires=` + date.toUTCString();
  document.cookie = myCookie;

}

function checkCookie(name, val){

  if(document.cookie.search(`${name}=${val}`) === -1){
    popup.classList.add('show');
  }

}

checkCookie('Portfolio', 'resserafim');


/* MENU */

let menus = document.querySelectorAll('nav > ul > li');
let topNav = document.querySelector('.top_nav')
let topNavOrgHeight = topNav.offsetHeight;
console.log(topNavOrgHeight);


menus.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    let subMenuHeight = e.target.querySelector('ul').offsetHeight;
    topNav.style.height = subMenuHeight + topNavOrgHeight + 'px';
    console.log(subMenuHeight);
  });

  item.addEventListener('mouseleave', () => {
    topNav.style.height = topNavOrgHeight + 'px';
  });
});


/* PAGE SCROLL */


const body = document.querySelector('body');
const sections = body.querySelectorAll('.section');
const footer = document.querySelector('footer .container');
let sectionsCount = sections.length;
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

  if(page === sections.length - 1){
    footer.classList.add('visible');
  }else{
    footer.classList.remove('visible');
  };
  console.log(page);
  
  if(page === sectionsCount - 1){
    downBtn.classList.add('disabled');
  }else{
    downBtn.classList.remove('disabled');
  };

  if(page === 0){
    upBtn.classList.add('disabled');
  }else{
    upBtn.classList.remove('disabled');
  };
}

downBtn.addEventListener('click', () => {
  pageMove(page + 1);
})

upBtn.addEventListener('click', () => {
  pageMove(page - 1);
})

let lastScroll = 0;

window.addEventListener('scroll', () => {

  if(window.scrollY > lastScroll){

    if(!document.body.classList.contains('active')){
      pageMove(page + 1);
      document.body.classList.add('active');

      setTimeout(() => {
        document.body.classList.remove('active');
      }, 500);
    }

  }

  if(window.scrollY < lastScroll){
    
    if(!document.body.classList.contains('active')){
      pageMove(page - 1);
      document.body.classList.add('active');

      setTimeout(() => {
        document.body.classList.remove('active');
      }, 500);
    }
  }
  lastScroll = window.scrollY;

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
  
  slideContainer.style.left = `${num*-(slideWidth+slideGap)*maxSlides}px`;
  currentIdx = num;

  updatePager();
}


pagerRight.addEventListener('click', (e) => {
  e.preventDefault();
  if(currentIdx < 1 ) {
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


/* SECTION SlIDE */

const ssSlideWrapper = document.querySelector('.ss-slide-wrapper');
const ssSlideContainer = ssSlideWrapper.querySelector('.ss-slide-container');
let ssSlides = ssSlideContainer.querySelectorAll('.ss-slide-container li');
const ssSlideCount = ssSlides.length;
let ssCurrentIdx = 0;
let timer;
const ssPager = ssSlideWrapper.querySelector('.pager');
let ssSlideWidth = ssSlideWrapper.offsetWidth;

// 슬라이드 복사본 생성
for (let i = 0; i < ssSlideCount; i++) {
  let cloneSlide = ssSlides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  ssSlideContainer.appendChild(cloneSlide);
}

for (let i = ssSlideCount - 1; i >= 0; i--) {
  let cloneSlide = ssSlides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  ssSlideContainer.prepend(cloneSlide);
}

// 모든 슬라이드 재배치
let allSsSlides = ssSlideContainer.querySelectorAll('.ss-slide-container li');
allSsSlides.forEach((slide, idx) => {
  slide.style.left = `${idx * 100}%`;
});

ssSlideContainer.style.left = `-${ssSlideCount * 100}%`;
ssCurrentIdx = ssSlideCount;
ssSlideContainer.classList.add('animated');

function goToSlide(num) {
  ssSlideContainer.classList.add('animated');
  ssSlideContainer.style.left = `-${num * 100}%`;
  ssCurrentIdx = num;

  if (ssCurrentIdx === ssSlideCount * 2) {
      setTimeout(() => {
          ssSlideContainer.classList.remove('animated');
          ssSlideContainer.style.left = `-${ssSlideCount * 100}%`;
          ssCurrentIdx = ssSlideCount;
      }, 400);
  } else if (ssCurrentIdx === 0) { 
      setTimeout(() => {
          ssSlideContainer.classList.remove('animated');
          ssSlideContainer.style.left = `-${ssSlideCount * (ssSlideCount - 1)}%`;
          ssCurrentIdx = ssSlideCount - 1;
      }, 400);
  }
}

// 자동 슬라이드
function AutoSlide() {
  timer = setInterval(() => {
      goToSlide(ssCurrentIdx + 1);
  }, 4000);
}

AutoSlide();

