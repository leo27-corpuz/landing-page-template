// burger show and off
let burger = document.querySelector("#burger-btn");
let nav = document.querySelector(".nav-ul-list");
let main = document.querySelector('.main-container');
burger.addEventListener('click', function(e){
    nav.classList.toggle('d_none');
});


//hide navbar scroll
let lastscrolltop = 0;
let navbar = document.querySelector(".nav-header-container");
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset;
    if(scrollTop > lastscrolltop){
        navbar.style.top = "-100px";
    }else{
        navbar.style.top = "0";
    }
    lastscrolltop = scrollTop;
    nav.classList.add('d_none');
});


//active link btn scroll
let lists = document.querySelectorAll('.nav-link');
function activeLink(li){
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach(item => {
    item.addEventListener('click', function(e){
        activeLink(this);
        let direction = this.getAttribute('direction');
        let page = document.querySelector(`.${direction}`);
        window.scroll({top: page.offsetTop, behavior: "smooth"})
    })
});

let sections = document.querySelectorAll('.body-container');
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            let target = document.querySelector(`.${id}-nav`);
            activeLink(target);
            // console.log(target);
        }
    });
};