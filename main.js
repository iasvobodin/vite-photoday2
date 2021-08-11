import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar'
gsap.registerPlugin(ScrollTrigger);

const word = document.querySelector('.word');
word.innerHTML = word.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

const word2 = document.querySelector('.word2');
word2.innerHTML = word2.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

const scroller = document.querySelector('.scroller');

const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });

ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });





const tl = gsap.timeline();
tl.to('.letters', { 
  opacity:0,
  stagger: 0.05,
},0);
tl.to('.letters', { 
  yPercent:-200,
  stagger: 0.05,
},0.1);



ScrollTrigger.create({
  trigger: ".header__holder",
  start: "center center", 
  end: 'center top',
  pin: true,
  // pinSpacing: false,
  scrub: true,
  markers: true,
  animation: tl,
  id: "headline"
});

gsap.to('.header__background',{
  scale: 1, 
  scrollTrigger:{
    start: "center top",
    scrub: true,
    markers: true,
    id: "bg"
    // pin: true,
  }
})

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
