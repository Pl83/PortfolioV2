/* ----------Decoration active page----------- */

onload = function() {
  let url = window.location.href;
  if (url.includes('index')) {
    let A = document.querySelectorAll('.A');
    A.forEach(element => {
      element.style.textDecoration = 'underline';
    });
  } else if (url.includes('projet')) {
    let B = document.querySelectorAll('.B');
    B.forEach(element => {
      element.style.textDecoration = 'underline';
    });
  } else if (url.includes('contacte')) {
    let C = document.querySelectorAll('.C');
    C.forEach(element => {
      element.style.textDecoration = 'underline';
    });
  }
  let partone = document.querySelector('#profile .partOne');
  let partTwo = document.querySelector('#profile .partTwo');
  let partThree = document.querySelector('#profile .partThree');
  let partFour = document.querySelector('#profile .partFour');
  gsap.fromTo(partone, { "margin-left": "200vw" }, { "margin-left": "0vw", duration: 1, ease: "power2.out" });
  gsap.fromTo(partTwo, { "margin-left": "-200vw" }, { "margin-left": "0vw", duration: 1, ease: "power2.out" });
  gsap.fromTo(partThree, { "margin-left": "200vw" }, { "margin-left": "0vw", duration: 1, ease: "power2.out" });
  gsap.fromTo(partFour, { "margin-left": "-200vw" }, { "margin-left": "0vw", duration: 1, ease: "power2.out" });

  let cta = document.querySelector('#profile .cta');
  gsap.fromTo(cta, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.out" });


  let cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    gsap.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.out", delay: index * 0.4 });
  });

};



/* ----------Display hidden data----------- */

let showmail = document.getElementsByClassName('showmail');

for (let i = 0; i < showmail.length; i++) {
  showmail[i].addEventListener('click', function() {
    let mail = document.getElementsByClassName('mail');
    for (let j = 0; j < mail.length; j++) {
      mail[j].innerText = 'pierre-louis.sans@edu.devinci.fr';
    }
  });
}

/* ----------Burger----------- */
let state = 0;
let burger = document.getElementById('burger');
let firstspan = burger.firstElementChild;
let secondspan = firstspan.nextElementSibling;
let thirdspan = secondspan.nextElementSibling;
let respnav = document.getElementById('respnav');

burger.addEventListener('click', function() {
  if (state == 0) {
    state = 1;
    thirdspan.style.display = 'none';
    firstspan.style.transform = 'rotate(45deg) translate(0px, 7px)';
    secondspan.style.transform = 'rotate(-45deg) translate(0px, -7px)';
    respnav.style.top = 'var(--header-height)';
  } else if (state == 1) {
    state = 0;
    thirdspan.style.display = 'block';
    firstspan.style.transform = 'rotate(0deg) translate(0px, 0px)';
    secondspan.style.transform = 'rotate(0deg) translate(0px, 0px)';
    respnav.style.top = '-200px';
  }

});