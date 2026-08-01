// ======================================
// EXPERIENCE TOGGLE
// ======================================

const expButtons = document.querySelectorAll(".exp-button");

expButtons.forEach(button => {

    button.addEventListener("click", () => {

        const detail = button.nextElementSibling;

        const isOpen = detail.classList.contains("active");

        // Tutup semua card
        document.querySelectorAll(".experience-detail").forEach(item => {

            item.classList.remove("active");

        });

        // Reset semua tombol
        expButtons.forEach(btn => {

            btn.innerHTML = "▼ Lihat Detail";

        });

        // Jika sebelumnya tertutup, buka
        if (!isOpen) {

            detail.classList.add("active");

            button.innerHTML = "▲ Tutup Detail";

            setTimeout(() => {

                detail.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            },150);

        }

    });

});

// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ======================================
// ACTIVE NAVBAR
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=window.scrollY;

        const offset=section.offsetTop-150;

        const height=section.offsetHeight;

        if(top>=offset && top<offset+height){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ======================================
// BACK TO TOP
// ======================================

const topButton=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show-top");

    }else{

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =======================
// Navbar Scroll Effect
// =======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

/*==============================
Reveal Animation
==============================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/*==========================
Loading Screen
==========================*/

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        const loader=document.getElementById("loader");

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1200);

});

/*==========================
Animated Background
==========================*/

const particles=document.getElementById("particles");

for(let i=0;i<40;i++){

    const dot=document.createElement("span");

    dot.className="particle";

    dot.style.left=Math.random()*100+"%";

    dot.style.animationDuration=(8+Math.random()*12)+"s";

    dot.style.animationDelay=Math.random()*10+"s";

    dot.style.width=(2+Math.random()*4)+"px";

    dot.style.height=dot.style.width;

    particles.appendChild(dot);

}

// ============================
// GALLERY MODAL PREMIUM
// ============================

const galleryItems = document.querySelectorAll(".gallery-item img");

const galleryModal = document.querySelector(".gallery-modal");

const galleryModalImg = document.querySelector(".gallery-modal-img");

const closeGallery = document.querySelector(".close-gallery");

const nextGallery = document.querySelector(".gallery-next");

const prevGallery = document.querySelector(".gallery-prev");

let currentImage = 0;

// buka gambar
galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentImage=index;

        showImage();

        galleryModal.classList.add("active");

    });

});

function showImage(){

    galleryModalImg.src=galleryItems[currentImage].src;

}

// tombol next
nextGallery.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentImage++;

    if(currentImage>=galleryItems.length){

        currentImage=0;

    }

    showImage();

});

// tombol previous
prevGallery.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentImage--;

    if(currentImage<0){

        currentImage=galleryItems.length-1;

    }

    showImage();

});

// tombol close
closeGallery.addEventListener("click",()=>{

    galleryModal.classList.remove("active");

});

// klik area hitam
galleryModal.addEventListener("click",(e)=>{

    if(e.target===galleryModal){

        galleryModal.classList.remove("active");

    }

});

