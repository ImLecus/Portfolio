var positions = [];
window.addEventListener("load", () => {
    positions = [
        0,
        document.getElementById("about-h").getBoundingClientRect().top + window.scrollY,
        document.getElementById("contact-h").getBoundingClientRect().top + window.scrollY
    ];
    console.log(positions);
})
const goTo = (id) => {
    window.scrollTo({
        top: positions[id],
        behavior: "smooth"
    });
    Active(id);   
}
window.addEventListener("scroll", () => {
    if(window.scrollY < positions[1]){
        Active(0);
    }
    else if(window.scrollY < positions[2]){
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
