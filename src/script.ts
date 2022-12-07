class Script{
    lang = "es";
    positions = [];
    goTo(pos:string){
        window.scrollTo({
            //top: positions[id],
            top:0,
            behavior: "smooth"
        });
        //Active(id);   
    }
    setNavBottom(pos:number){
        let navBottom:any = document.getElementById("navBottom")
        navBottom.style.transform = `translateY(${pos}%)`;
    }  
    getLang(actualLanguage:string){
        switch(actualLanguage){
            case "es": return "es";
            case "en": return "en";
            case "ca": return "ca";
            case "fr": return "fr";
            default: return "es";
        }
    }
}
export default Script;