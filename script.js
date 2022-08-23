const scroll = (id) => {
    var pos = document.getElementById(id).getBoundingClientRect().y;
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
    console.log(pos.bottom);
}
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
