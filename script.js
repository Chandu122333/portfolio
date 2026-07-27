// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});
});
});

// Typing animation
const words=[
"Software Developer",
"Java Developer",
"Python Developer",
"Web Developer",
"AI Enthusiast"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

const typing=document.querySelector(".typing");

function type(){

current=words[i];

if(!isDeleting){
typing.textContent=current.substring(0,j++);
if(j>current.length){
isDeleting=true;
setTimeout(type,1500);
return;
}
}else{
typing.textContent=current.substring(0,j--);
if(j<0){
isDeleting=false;
i=(i+1)%words.length;
}
}

setTimeout(type,isDeleting?60:120);
}

if(typing){
type();
}
