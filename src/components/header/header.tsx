import "./header.css"
import language from "../../data/languages.json";
import { useContext, useState, createContext } from "react";
import { Link } from "react-scroll";
import { userContext } from "../app";
import NavBottom from "./navbottom/navbottom";

function getLang(actualLanguage:string){
    switch(actualLanguage){
        case "es": return "es";
        case "en": return "en";
        case "fr": return "fr";
        default: return "es";
    }
}

export const navbarContext = createContext(true);

function Header(props:any){
    
    const lang = getLang(useContext(userContext));
    const [isBottomActive, setBottomActive] = useState(false);
    const toggleActive = () => {setBottomActive(!isBottomActive);}
    const menuItems = [
    {
        id:1, content: language.header[lang][0]
    },
    {
        id:2, content: language.header[lang][1]
    },
    {
        id:3, content: language.header[lang][2]
    },
    {
        id:4, content: language.header[lang][3]
    }
    ];
    
    return(
        <navbarContext.Provider value={isBottomActive}>
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
                <option value="fr">Français</option>
            </select>
            <button id="navDropdown" onClick={toggleActive}> 
                <span id="icon"></span>
            </button>  
        </header>
        <NavBottom event={toggleActive}/>
        </navbarContext.Provider>
    );
}

export default Header;