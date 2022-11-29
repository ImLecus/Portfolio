import Script from "../script";
var script = new Script();
import Slide from "./slide";
function Main(){
    return(
        <main>
            <div id="navBottom" className="w-full sticky top-0 bg-zinc-900">
                <div className="flex justify-center">
                    <a 
                    className="navLink active bottom" 
                    onClick={ () => {script.goTo('0'); script.setNavBottom(-200);}}>Inicio</a>
                </div>
                <div className="flex justify-center">
                    <a 
                    className="navLink bottom" 
                    onClick={ () => {script.goTo('1'); script.setNavBottom(-200);}}>Sobre mí</a>
                </div>
                <div className="flex justify-center">
                    <a 
                    className="navLink bottom" 
                    onClick={ () => {script.goTo('2'); script.setNavBottom(-200);}}>Proyectos</a>
                </div>
                <div className="flex justify-center">
                    <a
                    className="navLink bottom" 
                    onClick={ () => {script.goTo('3'); script.setNavBottom(-200);}}>Contacto</a>
                </div>
                
            </div>
            <section id="main">
                <h3 className="text-zinc-400">Hola, mi nombre es</h3>
                <h1 className="my-5">Marcos González</h1>
                <h3 className="text-zinc-400">Frontend Developer</h3>
            </section>
            <div className="h-28"></div>
            <section id="about">    
                <div className="flex justify-center">
                    <div className="justify-center items-center">
                        <h2 id="about-h" className="text-light">Sobre mí</h2>
                        <p className="items-center text-zinc-300">
                            <br /><br />
                            Durante prácticamente toda mi vida me he interesado por la programación, y antes de decidirme por el desarrollo web adquirí conocimientos de
                            otros lenguajes no tan relacionados con este ámbito.
                            <br /><br />
                            Me encanta curiosear nuevas tecnologías y pulir las que ya conozco, estar en constante crecimiento y poner en práctica
                            todo lo que aprendo.
                            <br /><br />
                            Mi objetivo actual es seguir expandiendo mis conocimientos y perfeccionar los que estoy aprendiendo.
                        </p>
                    </div>
                </div>
                <h3 className="mt-9 text-zinc-400">Tecnologías que manejo:</h3>
                <div id="root" className="slides flex flex-wrap">
                        <Slide name="HTML"/>
                        <Slide name="CSS"/>
                        <Slide name="JavaScript"/>
                        <Slide name="Tailwind"/>
                        <Slide name="Bootstrap"/>
                        <Slide name="Git"/>
                        <Slide name="GitHub"/>
                        <Slide name="Sass"/>
                        <Slide name="Pug"/>
                        <Slide name="NodeJS"/>
                        <Slide name="Typescript"/>
                        <Slide name="React"/>
                    </div>
            </section>
            <section id="projects">
                <h2 id="projects-h" className="text-light">Proyectos</h2>
                <div className="flex w-full justify-center">
                    <div className="card p-5 m-2 card1 transition-all flex justify-center items-center">
                        <a href="https://hyassets.netlify.app" className="transition-all">Visitar sitio</a>
                        <a href="https://github.com/ImLecus/HyassetsWeb" className="transition-all">Ver repositorio</a>
                    </div>
                </div>
            </section>
            <section id="contact">
                <h2 id="contact-h" className="text-light">Contacto</h2>
                <div className="h-16"></div>
                <form 
                    method="POST" 
                    id="form" 
                    name="contactForm" 
                    action="./success.html"
                    >                
                    <div className="flex justify-center items-center w-full">
                        <input 
                            type="text"
                            placeholder="Nombre"
                            name = "name"
                            autoComplete="off"
                            className="text bg-zinc-900 text-primary"
                            required />
                        <input 
                            type="email" 
                            placeholder="Correo electrónico" 
                            name = "mail"
                            autoComplete="off"
                            className="text bg-zinc-900 text-primary"
                            required />
                    </div>
                    <div className="flex justify-center">
                        <textarea 
                            placeholder="Escribe aquí tu mensaje..." 
                            name = "message"
                            className="text bg-zinc-900 text-primary resize-none"
                            required></textarea>
                    </div>
                    <div className="flex justify-center items-center w-full my-5">
                        <button className="primary h-12 transition-all hover:-translate-y-1 mx-8" type="submit">Enviar</button>
                        <button className="secondary h-12 transition-all hover:-translate-y-1 mx-8" onClick={()=>(window.location.href = '/docs/cv.pdf')}>Descargar CV</button>
                    </div>
                </form>
                <p className="m-8 text-center text-zinc-300" id="cont">También puedes contactar conmigo mediante los siguientes métodos:</p>
                <div className="flex justify-center">
                    <a href="https://www.twitter.com/ImLecus" className="text-xl transition-all hover:text-blue-300">Twitter</a>
                    <a href="https://github.com/ImLecus" className="text-xl transition-all hover:text-blue-300">GitHub</a>
                    <a href="https://www.linkedin.com/in/marcosgf" className="text-xl transition-all hover:text-blue-300">LinkedIn</a> 
                </div>
            </section>
        </main>
    );
}
export default Main;