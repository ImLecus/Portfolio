var positions = [];
window.addEventListener("resize", () => {
    positions = [
        0,
        document.getElementById("about-h").offsetTop - document.getElementById("about-h").offsetHeight,
        document.getElementById("contact-h").offsetTop - document.getElementById("contact-h").offsetHeight
    ];
})
const goTo = (id) => {
    window.scrollTo({
        top: positions[id],
        behavior: "smooth"
    });
    Active(id);   
}
window.addEventListener("scroll", () => {
    let posY = window.scrollY;
    if(posY + 90 < positions[1]){
        Active(0);
    }
    else if(window.scrollY + 90 < positions[2]){
        Active(1);
    }
    else{
        Active(2);
    }
})
const Active = (id) => {
    for(let i = 0; i < document.getElementsByClassName("nav-link").length; i++){
        document.getElementsByClassName("nav-link")[i].classList.remove("active");
    }
    document.getElementsByClassName("nav-link")[id].classList.add("active");
}
