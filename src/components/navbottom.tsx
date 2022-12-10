import React from "react";
import "./navbottom.css";

function NavBottom (){
    return(
        <div id="navBottom" className="w-full sticky top-0 bg-zinc-900">
            <div className="flex justify-center">
                <a 
                className="navLink active bottom" 
                onClick={ () => {}}>Inicio</a>
            </div>
            <div className="flex justify-center">
                <a 
                className="navLink bottom" 
                onClick={ () => {}}>Sobre mí</a>
            </div>
            <div className="flex justify-center">
                <a 
                className="navLink bottom" 
                onClick={ () => {}}>Proyectos</a>
            </div>
            <div className="flex justify-center">
                <a
                className="navLink bottom" 
                onClick={ () => {}}>Contacto</a>
            </div>
                    
        </div>
    );
}

export default NavBottom;