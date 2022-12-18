import "./navbottom.css";
import { Link } from "react-scroll";
import language from "../../../data/languages.json";
import { useContext } from "react";
import { userContext } from "../../app";
import { navbarContext } from "../header";

function getLang(actualLanguage:string){
    switch(actualLanguage){
        case "es": return "es";
        case "en": return "en";
        case "ca": return "ca";
        case "fr": return "fr";
        default: return "es";
    }
}

function NavBottom (props:any){
    const lang = useContext(userContext);
    const active = useContext(navbarContext);
    const menuItems = [
        {
            id:5, content: language.header[getLang(lang)][0]
        },
        {
            id:6, content: language.header[getLang(lang)][1]
        },
        {
            id:7, content: language.header[getLang(lang)][2]
        },
        {
            id:8, content: language.header[getLang(lang)][3]
        }
        ];
    return(
        <div id="navBottom" className={"w-full sticky top-0 bg-zinc-900 " + (active? "bottomActive":"")}>
            {menuItems.map(item => (
                <div className="flex justify-center" key={item.id}>
                    <Link className="navLink bottom" 
                          to={item.content} 
                          smooth={true}
                          offset={-250}
                          duration={500}
                          onClick={props.event}
                          >{item.content}</Link>
                </div>
                    
                ))}      
        </div>
    );
}

export default NavBottom;