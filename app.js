/****************************************Loader******************************************** */
let loader = document.querySelector("#loader");
setTimeout(function(){                 //Set Timeout = delay
    loader.style.top = "-100%"
},2200)
/***************************************gsap for first page******************************** */
let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (dets) => {
    // console.log("Hey");  //Ma screan par move karuga toh console ma hey print hoga jitni bar move karuga
    // console.log(dets.x);   //Move karuga x -axis ka along sari information degi
    // console.log(dets.y);
    // console.log(dets);
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x -150 + "px"
    blur.style.top = dets.y -150 + "px"
});


gsap.to("#nav", {
    backgroundColor: "rgba(0,0,0,1)",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});
/************************************Hover Effect on nav bar************************* */
let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",() => {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",() => {
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(136, 136, 223)"
        crsr.style.backgroundColor = "rgb(136, 136, 223)"
    })
})
/***************************************Slider Part********************************** */
const container = document.querySelector("#wrapper");
const prevButton = document.querySelector("#slider-container .fa-angle-left");
const nextButton = document.querySelector("#slider-container .fa-angle-right");
let images = document.querySelectorAll(".image-content");
let isScrolling = false;

function scrollNext() {
    if (isScrolling) return;
    isScrolling = true;

    container.style.transition = 'transform 0.5s ease';
    container.style.transform = 'translateX(-20%)';

    container.addEventListener('transitionend', () => {
        container.appendChild(images[0]);
        images = document.querySelectorAll(".image-content");
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
        isScrolling = false;
    }, { once: true });
}

function scrollPrev() {
    if (isScrolling) return;
    isScrolling = true;

    container.insertBefore(images[images.length - 1], images[0]);
    images = document.querySelectorAll(".image-content");
    container.style.transition = 'none';
    container.style.transform = 'translateX(-20%)';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            container.style.transition = 'transform 0.5s ease';
            container.style.transform = 'translateX(0)';
            container.addEventListener('transitionend', () => {
                isScrolling = false;
            }, { once: true });
        });
    });
}

prevButton.addEventListener("click", scrollPrev);
nextButton.addEventListener("click", scrollNext);

/***************************************Gsap for Up to down********************************** */
gsap.from("#aboutUs img, #about-us-in", {
    y: 50, 
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
});
gsap.from(".card", {
    scale: 0.8,
    // rotate3d: [-1, 1, 0, 20],
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true, // Uncomment this line if you want to see the markers
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
});

/**************************************Scroll for Movie***************************** */
const prevButton2 = document.querySelector("#page3 .fa-angle-left");
const nextButton2 = document.querySelector("#page3 .fa-angle-right");

nextButton2.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
});

prevButton2.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
});


/********************************************For Quotes**************************** */
gsap.from("#colon1", {
    x: -70,
    y:-40,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2
    }
});


gsap.from("#colon2", {
    x: 70,
    y:40,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2
    }
});

/***************************************Dragon Bar************************* */
gsap.from("#organatoo", {
    x: -200,
    stagger: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2
    }
});

gsap.from("#charizardRight", {
    x: 200,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
});

gsap.from("#pokeball", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#pokeball",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
});

/****************************************************Slider part************************* */
gsap.from("#green-div img,#poke-bar", {
    y: 50, 
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#green-div img",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
});