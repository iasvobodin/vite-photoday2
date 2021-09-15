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


// const smooth = document.querySelector('.smooth-scroll');
// const locoScroll = new LocomotiveScroll({
//   el: smooth,
//   smooth: true
// });

// // if(!locoScroll.isMobile){
//   locoScroll.on("scroll", ScrollTrigger.update);
  
// // }
// console.log(locoScroll);



// ScrollTrigger.scrollerProxy(smooth, {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
// });




// const tl = gsap.timeline();
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



// ScrollTrigger.create({
//   trigger: ".header__holder",
//   start: "bottom bottom", 
//   end: 'bottom top',
//   pin: ".header__holder",
//   // pinSpacing: false,
//   scrub: true,
//   // markers: true,
//   // animation: tl,
//   id: "headline"
// });

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

// tl2.to('.header__holder__background',
// {
//   scrollTrigger: {
//     pin: '.header__background',
//     pinSpacing: false,
//     end: () => "+=" + innerHeight*3,
//   }
// });


ScrollTrigger.create({
  trigger:'.header__holder__background',
  pin: '.header__background',
  end: () => "+=" + innerHeight*3,
})


// gsap.to('.header__background',{
//   // opacity: 0,
//   duration: 0.7,
//   scrollTrigger:{
//     trigger: ".description",
//     start: "top 30%",
//     toggleActions:"play none none reverse",
//     pin:'.desc__hedline',
//     pinSpacing: false,
//   }
// })

// gsap.fromTo('.h__holder1',{xPercent: 100}, {
//   xPercent: 0,
//   scrollTrigger: {
//     pin: '.desc__photos',
//     trigger:'.img__holder1',
//     // end: '+=300%',
//     pinSpacing: false,
//     scrub: true,
//   }
// });
// gsap.fromTo('.h__holder1',{
//   xPercent:100,
//   // yPercent: -50,
// }, {
//   xPercent: 0,
//   // yPercent: 0,
//   scrollTrigger: {
//     // scrub: true,
//     start: "top top",
//     end: "top top",
//     trigger:'.img__holder1',
//     // markers: true,
//     pin:'.h__holder1',
//     id:'trans'
//     // pin: '.img__holder1',
//     // end: '+=300%',
//     // pinSpacing: false
//   }
// });
gsap.to('.anim2__img1', {
  xPercent: -100,
  scrollTrigger: {
    // start: 'bottom top ',
    // pin: '.anim2__img1',
    end: '+=100',
    // pinSpacing: false,
    scrub:true,
    id:'21',
  markers:true,
    // id:'anim2__img1',
    // markers:true,
  }
});


ScrollTrigger.create({
  trigger:'.anim2__img1',
  pin: '.anim2__img1',
  end: '+=300%',
  // pinSpacing: false,
  
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
// anim2__head1
// gsap.to('.img__holder2', {
//   scrollTrigger: {
//     pin: '.img__holder2',
//     end: '+=200%',
//     pinSpacing: false
//   }
// });
// gsap.to('.img__holder3', {
//   scrollTrigger: {
//     pin: '.img__holder3',
//     // end: '+=300%',
//   }
// })

if (document.querySelector('.gsap-marker-scroller-start')) {		
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	

  bodyScrollBar.addListener(({ offset }) => {  
    gsap.set(markers, { marginTop: -offset.y })
  });
}
// The actual animations and ScrollTriggers


// gsap.from("section.red .text", {
//   x: -500,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "section.red",
//     start:"top 50%",     
//     toggleActions: "play none none reset",
//     // markers:true
//   },
// });


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();