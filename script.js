
/* ===================================
   CHANDU PROFESSIONAL PORTFOLIO JS
=================================== */


"use strict";



// SIDE MENU


const sideMenu = document.getElementById("sideMenu");


function openMenu(){

    sideMenu.classList.add("active");

}



function closeMenu(){

    sideMenu.classList.remove("active");

}




// SLIDE SYSTEM


const slides = [

"home",
"about",
"education",
"skills",
"projects",
"experience",
"certificates",
"contact"

];


let currentSlide = 0;



function showSlide(id){


    document.querySelectorAll(".slide")
    .forEach(slide=>{

        slide.classList.remove("active");

    });



    let selected = document.getElementById(id);


    if(selected){

        selected.classList.add("active");

    }



    currentSlide = slides.indexOf(id);


    updateDots();


    closeMenu();

}




// DOT UPDATE


function updateDots(){


let dots=document.querySelectorAll(".dots span");


dots.forEach(dot=>{

dot.style.opacity="0.5";

dot.style.transform="scale(1)";

});



if(dots[currentSlide]){


dots[currentSlide].style.opacity="1";

dots[currentSlide].style.transform="scale(1.4)";


}



}







// AUTO SLIDER


setInterval(()=>{


currentSlide++;


if(currentSlide >= slides.length){

currentSlide=0;

}



showSlide(slides[currentSlide]);



},6000);









// TYPING EFFECT


const words=[

"Software Developer",

"AI Enthusiast",

"IoT Explorer",

"ECE Engineer"

];


let wordIndex=0;

let charIndex=0;

let typingElement=document.getElementById("typing");



function typeEffect(){


if(charIndex < words[wordIndex].length){


typingElement.innerHTML +=
words[wordIndex].charAt(charIndex);


charIndex++;


setTimeout(typeEffect,100);


}


else{


setTimeout(()=>{


typingElement.innerHTML="";


charIndex=0;


wordIndex++;


if(wordIndex >= words.length){

wordIndex=0;

}


typeEffect();



},1500);


}



}



window.onload=()=>{

typeEffect();

updateDots();

};







// CLOSE MENU WHEN CLICK OUTSIDE


document.addEventListener("click",(e)=>{


let button=document.querySelector(".menu-btn");


if(

!sideMenu.contains(e.target)

&&

!button.contains(e.target)

){


closeMenu();


}



});









// MOBILE SWIPE SLIDES


let startX=0;



document.addEventListener(
"touchstart",
(e)=>{

startX=e.touches[0].clientX;

});





document.addEventListener(
"touchend",
(e)=>{


let endX=e.changedTouches[0].clientX;


if(startX-endX > 80){


currentSlide++;


if(currentSlide>=slides.length){

currentSlide=0;

}


showSlide(slides[currentSlide]);


}




if(endX-startX > 80){


currentSlide--;


if(currentSlide<0){

currentSlide=slides.length-1;

}


showSlide(slides[currentSlide]);


}



});







// FLOATING PARTICLES


function createParticle(){


let particle=document.createElement("div");


particle.className="particle";


particle.innerHTML="✨";


particle.style.left=
Math.random()*100+"vw";


particle.style.fontSize=
(Math.random()*20+10)+"px";



document.body.appendChild(particle);



setTimeout(()=>{


particle.remove();


},5000);



}



setInterval(createParticle,700);
