import Script from "../script";
import "./header.css"
var script = new Script();
import language from "../data/languages.json";
import React from "react";
var lang = script.lang;
function goTo(id:number){
    window.scrollTo({
        top: document.getElementsByClassName("waypoint")[id].getBoundingClientRect().top,
        behavior: "smooth"
    })
}
class Header extends React.Component{
    render(){
        return(
        <header className="bg-zinc-900 shadow-xl" id="nav">
            <a href="/" id="logo">
                <img src="./img/logo.png"/>
            </a>
            <nav className="nav">
                    <a 
                        className="navLink active hover:text-light" 
                        onClick={() => goTo(0)}>{language.header[script.getLang(lang)][0]}</a>
                    <a 
                        className="navLink hover:text-light" 
                        onClick={() => goTo(1)}>{language.header[script.getLang(lang)][1]}</a>
                    <a 
                        className="navLink hover:text-light" 
                        onClick={() => goTo(2)}>{language.header[script.getLang(lang)][2]}</a>
                    <a
                        className="navLink hover:text-light" 
                        onClick={() => goTo(3)}>{language.header[script.getLang(lang)][3]}</a>
                    
            </nav>
            <select name="" id="">
                        <option value="">Español</option>
                        <option value="">English</option>
                        <option value="">Català</option>
                        <option value="">Français</option>
                    </select>
            <button id="navDropdown" type="button"> 
                <span id="icon"></span>
            </button>  
        </header>
        );
    }
    
}

export default Header;