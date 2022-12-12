import Script from "../script";
import "./header.css"
var script = new Script();
import language from "../data/languages.json";
import { useState } from "react";
var lang = script.lang;
import {Link} from "react-scroll";

const menuItems = [
    {
        id:1, content: language.header[script.getLang(lang)][0]
    },
    {
        id:2, content: language.header[script.getLang(lang)][1]
    },
    {
        id:3, content: language.header[script.getLang(lang)][2]
    },
    {
        id:4, content: language.header[script.getLang(lang)][3]
    }
];

function Header(){
    const [actualLang,setLang] = useState("es");
    console.log(actualLang);
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
            <select onChange={(e) => {setLang(e.target.value);}}>
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