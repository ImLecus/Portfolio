import "./header.css"
import language from "../data/languages.json";
import { useContext } from "react";
import { Link } from "react-scroll";
import { userContext } from "./app";

function getLang(actualLanguage:string){
    switch(actualLanguage){
        case "es": return "es";
        case "en": return "en";
        case "ca": return "ca";
        case "fr": return "fr";
        default: return "es";
    }
}
function Header(props:any){
    
    const lang = useContext(userContext);

    const menuItems = [
    {
        id:1, content: language.header[getLang(lang)][0]
    },
    {
        id:2, content: language.header[getLang(lang)][1]
    },
    {
        id:3, content: language.header[getLang(lang)][2]
    },
    {
        id:4, content: language.header[getLang(lang)][3]
    }
    ];
    
    return(
        <header className="bg-zinc-900 shadow-xl" id="nav">
            <a href="/" id="logo">
                <img src="./img/logo.png"/>
            </a>
            <nav className="nav">
                {menuItems.map(item => (
                    <Link className="navLink hover:text-light" 
                          to={item.content} 
                          smooth={true}
                          offset={-250}
                          duration={500}
                          key={item.id}>{item.content}</Link>
                ))}
            </nav>
            <select onChange={(e) => {props.event(e.target.value)}}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="ca">Català</option>
                <option value="fr">Français</option>
            </select>
            <button id="navDropdown" type="button"> 
                <span id="icon"></span>
            </button>  
        </header>
    );
}

export default Header;