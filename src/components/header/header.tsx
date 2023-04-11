import "./header.css"
import language from "../../data/languages.json";
import { useContext, useState, createContext } from "react";
import { Link } from "react-scroll";
import { userContext } from "../../main";
import NavBottom from "./navbottom/navbottom";
import getLang from "../../main";

export const navbarContext = createContext(true);

function Header({event}:any){
    
    const lang = getLang(useContext(userContext));
    const [isBottomActive, setBottomActive] = useState(false);
    const toggleActive = () => {setBottomActive(!isBottomActive);}
    const menuItems = language.header[lang]
    
    return(
        <navbarContext.Provider value={isBottomActive}>
        <header className="shadow-xl" id="nav">
            <a href="/" id="logo">
                <img src="./img/logo.png"/>
            </a>
            <nav className="nav">
                {menuItems.map(item => (
                    <Link className="navLink hover:text-light" 
                          to={item} 
                          smooth={true}
                          offset={-250}
                          duration={500}
                          key={menuItems.indexOf(item) + 1}>{item}</Link>
                ))}
                </nav>
                
            {/* <select onChange={(e) => {event(e.target.value)}}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select> */}
            <button>
                <img src="github.svg"/>
            </button>
            <button id="navDropdown" onClick={toggleActive}> 
                <span id="icon"></span>
            </button>  
        </header>
        <NavBottom event={toggleActive}/>
        </navbarContext.Provider>
    );
}

export default Header;