// function Loader(){
//     var tl = gsap.timeline()
// tl.from("#Loader h1",{
    
//     delay:1,
//     duration:0.5,
//     opacity:0
// })
// tl.to("#Loader h1",{
//     y:-50,
//     delay:1,
//     duration:0.5,
//     opacity:0
// })

// tl.to("#loader ",{
//     height:0,

//     duration:1,

//     ease:Expo.easeInOut,
// })
// }
function CursorAnimation(){
    var csr=document.querySelector("#csr")

    document.addEventListener("mousemove",function(dets){
        csr.style.left=dets.clientX+"px"
        csr.style.top=dets.clientY+"px"
     
    })


}
// Loader()
CursorAnimation()

function GsapAnimation(){
    var tl=gsap.timeline()
    tl.from("#image-container",{
        opacity:0,
        duration:1.5,
    
        scrollTrigger:{
            trigger:"#image-container",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 70%",
            scrub:1,
            // pin:true
        }
    
    })
    tl.to("#image-container img",{
        y:-1000,
        stagger:{
             each: 2,
            from: "end"
        },
        dealy:1,
        duration:2.5,
        // ease: "expoScale(0.5,7,none)",
        scrollTrigger:{
            trigger:"#image-container",
            scroller:"body",
            // markers:true,
            start:"top 0",
            end:"top -100%",
            scrub:1,
            pin:true
        }
    })
    
}
GsapAnimation()
function Locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
