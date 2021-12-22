const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const faders = document.querySelectorAll(".fade-in");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    document.body.classList.toggle("fixed");
    menuItems.classList.toggle("open");
});



const appearOptions = {
    threshold: 0.2,
};
const appearOnScroll = new IntersectionObserver(function( entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
})



