import Script from "../script";
var script = new Script();
import language from "../data/languages.json";
var lang = script.lang;
function Header(){
    return(
        <header className="flex sticky top-0 justify-between py-1 z-30 bg-zinc-900 shadow-xl" id="nav">
            <a href="/" className="flex items-center ml-6" id="logo">
                <img src="./img/logo.png" width="60" className="ml-5" />
            </a>
            <div className="flex justify-between mr-5 items-center nav" id="navbar">
                    <a 
                        className="navLink active mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('0')}>{language.header[script.getLang(lang)][0]}</a>
                    <a 
                        className="navLink mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('1')}>{language.header[script.getLang(lang)][1]}</a>
                    <a 
                        className="navLink mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('2')}>{language.header[script.getLang(lang)][2]}</a>
                    <a
                        className="navLink mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('3')}>{language.header[script.getLang(lang)][3]}</a>
                    <select name="" id="">
                        <option value="">Español</option>
                        <option value="">English</option>
                        <option value="">Català</option>
                        <option value="">Français</option>
                    </select>
            </div>
            <button id="navDropdown" type="button"> 
                <span id="icon"></span>
            </button>  
        </header>
    );
}

export default Header;