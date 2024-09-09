var tl = gsap.timeline();

tl.from(".nav h3",{
    y:-50,
    opacity:0,
    delay:0.2,
    duration:0.5,
    stagger : 0.4
})
tl.from(".body h1",{
    x:-500,
    opacity:0,
    duration:0.6,
    stagger:0.4
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.6,
    stagger:0.4
})
