const goTo = (pos) => {
    //var pos = document.getElementById(id).getBoundingClientRect();
    //console.log(id, pos);
    window.scrollTo({
        top: pos,
        behavior: "smooth"
       });
}