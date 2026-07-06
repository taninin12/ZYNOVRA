/* ==========================================
   ZYNOVRA GLOBAL HPV VACCINATION DRIVE
   script.js
========================================== */

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});


// ===============================
// Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach((el) => {

    observer.observe(el);

});


// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace("+","");

        const data = +counter.getAttribute("data-target") || value;

        const time = data / speed;

        if(value < data){

            counter.innerText = Math.ceil(value + time);

            setTimeout(animate,20);

        }else{

            counter.innerText = data;

        }

    };

    animate();

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#6B46C1";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// Countdown Timer
// ===============================

const campaignDate = new Date("September 1, 2026 00:00:00").getTime();

const timer = setInterval(function(){

    const now = new Date().getTime();

    const distance = campaignDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if(d){

        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;

    }

},1000);


// ===============================
// Hero Image Hover
// ===============================

const vaccine = document.querySelector(".vaccine-image");

if(vaccine){

vaccine.addEventListener("mousemove",()=>{

vaccine.style.transform="scale(1.03) rotate(-2deg)";

});

vaccine.addEventListener("mouseleave",()=>{

vaccine.style.transform="scale(1) rotate(0deg)";

});

}


// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ===============================
// Welcome Message
// ===============================

console.log("Welcome to the Zynovra Global HPV Vaccination Drive Website");


// ===============================
// End of Script
// ===============================