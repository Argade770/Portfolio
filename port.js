
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});


/* ======================================
   TYPING EFFECT
====================================== */

const typing = document.getElementById("typing");

const words = [

    "Python Full Stack Developer",
    "Future AI Engineer",
    "JavaScript Developer",
    "Web Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex == words.length){

                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 120);

}

typeEffect();


/* ======================================
   SCROLL TO TOP
====================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ======================================
   SCROLL REVEAL
====================================== */

const revealElements=document.querySelectorAll(

"#about,#skills,#projects,#contact,.card,.skill,.about-box"

);

window.addEventListener("scroll",reveal);

function reveal(){

    revealElements.forEach((item)=>{

        const windowHeight=window.innerHeight;

        const top=item.getBoundingClientRect().top;

        const visible=100;

        if(top < windowHeight-visible){

            item.classList.add("show");

            item.classList.add("fade");

        }

    });

}

reveal();


/* ======================================
   ACTIVE NAVBAR
====================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-200;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ======================================
   BUTTON RIPPLE
====================================== */

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

let x=e.clientX-button.offsetLeft;

let y=e.clientY-button.offsetTop;

let ripple=document.createElement("span");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ======================================
   CONSOLE MESSAGE
====================================== */

console.log("Welcome To Paras Portfolio 🚀");

/* =======================
Counter Animation
======================= */

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.animationDelay=index*0.2+"s";

});

/* =======================
Image Rotation
======================= */

const profile=document.querySelector(".right img");

profile.addEventListener("mouseenter",()=>{

profile.style.transform="rotate(5deg) scale(1.05)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="rotate(0deg)";

});
/*==========================
THEME TOGGLE
==========================*/

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

}

/*==========================
COUNTER
==========================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/80;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(update,30);

}

else{

counter.innerText=target;

}

}

update();

});
const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) rotateX(5deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) rotateX(0deg)";

});

});