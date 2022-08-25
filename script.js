var setPos = (obj) =>  {
    return obj.getBoundingClientRect();
}
const scroll = (id) => {
    var pos = document.getElementById(id).getBoundingClientRect();
    window.scrollTo({
        top: pos.bottom - (pos.bottom - pos.top),
        behavior: "smooth"
    });
    console.log(pos.bottom);
}
let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");