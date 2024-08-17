/* MENU */

let menus = document.querySelectorAll('.top_nav > nav > ul > li');
let topNav = document.querySelector('.top_nav')


menus.forEach(item => {
  item.addEventListener('mouseenter', () => {
    let subMenuHeight = querySelector('ul').offsetHeight;
    topNav.style.heght = subMenuHeight + 'px';
  });
  
  item.addEventListener('mouseleave', () => {
    topNav.style.heght = subMenuHeight + 'px';
  });

});

/* PAGE SCROLL */

// const wrap = document.querySelector('body');
// const mPage = document.querySelectorAll('.m_page');
// const lastPage = mPage.length - 1;
// // const footer = document.querySelector('footer .containar');
// let currentIdx = 0;

// window.addEventListener('scroll', () => {
//   const currentScrollY = window.scrollY;

//   if (currentScrollY > currentIdx) {
//     currentIdx++;
//   } else if (currentScrollY < currentIdx) {
//     currentIdx--;
//   }

//   if (currentIdx < 0) {
//     currentIdx = 0;
//   } else if (currentIdx > lastPage) {
//     currentIdx = lastPage;
//   }

//   wrap.style.top = currentIdx * -100 + 'vh';

//   currentIdx = currentScrollY;

//   // endPage = (currentIdx === lastPage);
//   // if (endPage) {
//   //   if (scrollY > lastScrollY) {
//   //     footer.classList.add('visible');
//   //   } else if (scrollY < lastScrollY) {
//   //     footer.classList.remove('visible');
//   //   }
//   // } else {
//   //   footer.classList.remove('visible');
//   // }

// });

/* MAIN FORM */

const form = document.querySelector('main form');

form.addEventListener('click', (e) => {
  e.preventDefault();

  form.classList.toggle('search');
})


/* MAIN SlIDE */


let slideWrapper = document.querySelector('slide-wrapper');
let slideContainar = document.querySelector('slide-containar');
let 
