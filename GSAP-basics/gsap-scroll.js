// let tl = gsap.timeline();

gsap.from('.page1 .box1', {
    // x: 100,
    y: 500,
    opacity: 0,
    duration: 2,
    scale: 0,
    // delay: 3,
});

// scroll trigger method
// gsap.from('.page2 .box2', {
//     // x: 100,
//     opacity: 0,
//     duration: 3,
//     scale: 0,
//     rotate: 360,
//     // scrollTrigger: ".page2 .box2",
//     scrollTrigger: {
//         trigger: '.page2 .box2',
//         scroller: 'body',
//         markers: true,
//         start: "top 70%"
//     }
// })


gsap.to('.page2 h1', {
    transform: 'translate(-230%)',
    scrollTrigger: {
        trigger: '.page2',
        start: 'top 0%',
        end: 'top -200%',
        scrub: 1,
        scoller: 'body',
        // markers: true,
        pin: true
    }
})


gsap.from('.page3 .box3', {
    scale: 0.2,
    opacity: 0,
    x: 200,
    y: 200,

    scrollTrigger: {
        trigger: '.page3',
        start: 'top 90%',
        end: 'top 50%',
        // markers: true,
        scrub: 1
    }
});



// gsap.to('.page4 .box4', {
//     x: -100,
//     scrollTrigger: {
//         trigger: '.page4',
//         start: 'top 10%',
//         end: 'top -150%',
//         scroller: 'body',
//         pin: true,
//         markers: true
//     }
// })

gsap.to('.page4 .box4', {
    transform: 'translate(-280%)',
    scrollTrigger: {
        trigger: '.page4',
        start: 'top 0%',
        end: 'top -100%',
        scrub: 1,
        pin: true
    }
})