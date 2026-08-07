/* ==========================================
   CHANDU PORTFOLIO - SCRIPT.JS
   Menu + Slides + Animations
========================================== */


"use strict";


// SIDE MENU

const menu = document.getElementById("sideMenu");


function openMenu(){

    menu.classList.add("show");

}



function closeMenu(){

    menu.classList.remove("show");

}



// SLIDE SYSTEM


function showSlide(id){


    let slides = document.querySelectorAll(".slide");


    slides.forEach(slide=>{

        slide.classList.remove("active");

    });



    let selected = document.getElementById(id);


    if(selected){

        selected.classList.add("active");

    }



    closeMenu();

}




// CLICK OUTSIDE MENU CLOSE


document.addEventListener("click",function(e){


    let button=document.querySelector(".menu-btn");


    if(
        !menu.contains(e.target) &&
        !button.contains(e.target)
    ){

        closeMenu();

    }


});





// TYPING EFFECT


const text = 
"ECE Engineer | Developer | AI & IoT Enthusiast";


let index = 0;


function typing(){


    let element=document.querySelector(".hero-content h2");


    if(element && index < text.length){


        element.innerHTML += text.charAt(index);

        index++;


        setTimeout(typing,80);


    }


}



window.onload=function(){

    typing();

};





// SCROLL / SWIPE SLIDE EFFECT


let touchStart=0;


document.addEventListener(
"touchstart",
(e)=>{

touchStart=e.changedTouches[0].screenX;

});



document.addEventListener(
"touchend",
(e)=>{


let touchEnd=e.changedTouches[0].screenX;


if(touchStart-touchEnd > 80){

    nextSlide();

}



if(touchEnd-touchStart > 80){

    previousSlide();

}


});





let slideNames=[

"home",
"about",
"skills",
"projects",
"certificates",
"contact"

];


let current=0;



function nextSlide(){


if(current < slideNames.length-1){

current++;

showSlide(slideNames[current]);

}


}



function previousSlide(){


if(current>0){

current--;

showSlide(slideNames[current]);

}


}





// HEART FLOAT ANIMATION


setInterval(()=>{


let heart=document.createElement("span");


heart.innerHTML="❤️";


heart.className="floating-heart";


heart.style.left=Math.random()*100+"%";


document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},4000);



},1500);
