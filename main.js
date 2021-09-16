import 'locomotive-scroll/dist/locomotive-scroll.css'
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar'
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger);

const word = document.querySelector('.word');
word.innerHTML = word.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

const word2 = document.querySelector('.word2');
word2.innerHTML = word2.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

// const scroller = document.querySelector('.scroller');

// const bodyScrollBar = Scrollbar.init(scroller, { 
//   damping: 0.08, 
//   renderByPixels: true, 
//   delegateTo: document, 
//   alwaysShowTracks: false 
// });

// ScrollTrigger.scrollerProxy(".scroller", {
//   scrollTop(value) {
//     if (arguments.length) {
//       bodyScrollBar.scrollTop = value;
//     }
//     return bodyScrollBar.scrollTop;
//   }
// });

// bodyScrollBar.addListener(ScrollTrigger.update);

// ScrollTrigger.defaults({ scroller: scroller });


// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.defaults({ scroller: document.querySelector(".smooth-scroll") });


gsap.to('.letters', { 
  yPercent:-200,
  scrollTrigger:{
    trigger: ".header__holder",
    start: "bottom bottom", 
    end: 'bottom top',
    pin: ".header__holder",

    // pinSpacing: false,
    scrub: true,
    // markers: true,
    id: "headline"
  },
  stagger:{
    each: 0.05,
    from: "end",
  },
});

gsap.to('.header__holder__background',{
  scale: 1, 
  scrollTrigger:{
    start: "top top",
    end: () => "+=" + innerHeight*1,
    scrub: true,
    // markers: true,

    // pinSpacing: false,
    id: "bg",
    // pin: '.header__background',
  }
})

ScrollTrigger.create({
  trigger:'.header__holder__background',
  pin: '.header__background',
  end: () => "+=" + innerHeight*3,
})


gsap.to('.anim2__img1', {
  xPercent: -100,
  scrollTrigger: {
    start: 'bottom top ',
    end: '+=100%',
    scrub:0.1,
    markers: true,
  }
});


ScrollTrigger.create({
  trigger:'.anim2__img1',
  pin: '.anim2__img1',
  end: '+=300%',
  pinSpacing: false,
  
})

ScrollTrigger.create({
  trigger:'.anim2__img2',
  pin: '.anim2__img2',
  pinSpacing: false,
  end: '+=200%',
})
ScrollTrigger.create({
  trigger:'.anim2__img3',
  pin: '.anim2__img3',
  end: '+=100%',
})
ScrollTrigger.create({
  trigger:'.anim2__head1',
  pin: '.anim2__head1',
  end: '+=300%',
  pinSpacing: false,
})
ScrollTrigger.create({
  trigger:'.anim2__head2',
  pin: '.anim2__head2',
  end: '+=200%',
  pinSpacing: false,
})
ScrollTrigger.create({
  trigger:'.anim2__head3',
  pin: '.anim2__head3',
  end: '+=100%',
  pinSpacing: false,
})


//NEED IT

// if (document.querySelector('.gsap-marker-scroller-start')) {		
//   const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	

//   bodyScrollBar.addListener(({ offset }) => {  
//     gsap.set(markers, { marginTop: -offset.y })
//   });
// }
// The actual animations and ScrollTriggers


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();