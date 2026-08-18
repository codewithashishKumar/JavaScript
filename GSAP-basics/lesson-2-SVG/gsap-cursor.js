gsap.registerPlugin(ScrollTrigger);

gsap.from('nav h2', {
    y: -30,
    duration: 1,
    opacity: 0
});

gsap.from('nav li', {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.5
});

gsap.to('.container p', {
    x: '-70%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: '+=1500',
        scrub: 0.5,
        pin: true,
        markers: false
    }
});

var cursor = document.querySelector('#cursor');
var body = document.querySelector('#body');
var container = document.querySelector('.container');

const moveCursorX = gsap.quickTo(cursor, 'x', {
    duration: 0.2,
    ease: 'power3.out'
});

const moveCursorY = gsap.quickTo(cursor, 'y', {
    duration: 0.2,
    ease: 'power3.out'
});

body.addEventListener('mousemove', (dets) => {
    moveCursorX(dets.clientX);
    moveCursorY(dets.clientY);
});

container.addEventListener('mouseenter', () => {
    cursor.style.background = '#000';
    gsap.to(cursor, {
        scale: 3,
        ease: 'none'
    });
});

container.addEventListener('mouseleave', () => {
    cursor.style.background = '#000';
    gsap.to(cursor, {
        scale: 1
    });
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});