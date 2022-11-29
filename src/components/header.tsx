import Script from "../script";
var script = new Script();
function Header(){
    return(
        <header className="flex sticky top-0 justify-between py-2 z-30 bg-zinc-900 shadow-xl" id="nav">
            <a href="/" className="flex items-center ml-6" id="logo">
                <img src="./img/logo.png" width="60" className="ml-5" />
            </a>
            <div className="flex justify-between mr-5 items-center nav">
                    <a 
                        className="navLink active mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('0')}>Inicio</a>
                    <a 
                        className="navLink mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('1')}>Sobre mí</a>
                    <a 
                        className="navLink mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('2')}>Proyectos</a>
                    <a
                        className="navLink mx-8 transition-all hover:-translate-y-1 hover:text-light" 
                        onClick={() => script.goTo('3')}>Contacto</a>
            </div>
            <button id="navDropdown" type="button">
                <span id="icon"></span>
            </button>  
        </header>
    );
}



export default Header;