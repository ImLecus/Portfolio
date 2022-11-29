class Script{
    lang = "es"
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
        if(actualLanguage == "es"){ return "es"}
        else{ return "en"}
    }
}
export default Script;