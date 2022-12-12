class Script{
    lang = "es";

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