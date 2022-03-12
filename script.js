let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "60%",
        scrub: 1,
    },
});



let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "150%",
        scrub: 1,
    },
});
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "0%",
        end: "50%",
        scrub: 1,
    },
});
let tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "-20%",
        end: "50%",
        scrub: 1,
    },
});
let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        start: "-50%",
        end: "20%",
        scrub: 1,
    },
});
let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-80%",
        end: "120%",
        scrub: 1,
    },
});
let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-page",
        start: "-20%",
        end: "20%",
        scrub: 1,
    },
});
let tl13 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-page",
        start: "-50%",
        end: "5%",
        scrub: 1,
    },
});
let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-30%",
        end: "30%",
        scrub: 1,
    },
});
let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-50%",
        end: "10%",
        scrub: 1,
    },
});
let tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        start: "-20%",
        end: "50%",
        scrub: 1,
    },
});

tl.fromTo('.sliding-text', { y: 0 }, { y: -400 });
tl2.fromTo('.logo', {scale: 6},{scale:1, top: "2rem", left: "3rem", x:"50%", y: "50%"});
tl4.fromTo('.square', {left: '70%'}, {left: '100%' , top: "10%", opacity: 0}, );
tl5.fromTo('.firstImg', {left: '30%'}, {left: '100%' , opacity: 0}, );
tl6.fromTo('.secondImg', {opacity: 0}, { opacity: 1}, );
tl7.fromTo('.square2', {left: '10%',top: "80%"}, {left: '100%' , top: "0%", opacity: 0}, );
tl8.fromTo('.form-section', {opacity: 0}, { opacity: 1}, );
tl13.fromTo('.details-section', {opacity: 0}, { opacity: 1}, );
tl9.fromTo('.card', { opacity: 0}, {  opacity: 1}, );
tl10.fromTo('.project', { opacity: 0}, {  opacity: 1}, );
tl11.fromTo('.intro1', { opacity: 0}, {  opacity: 1}, );
tl12.fromTo('.intro2', { opacity: 0}, {  opacity: 1}, );



let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "100%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});