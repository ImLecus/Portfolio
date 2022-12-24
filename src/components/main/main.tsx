import {useContext} from "react";
import "./main.css"
import Slide from "./slide/slide";
import Card from "./card/card";
import language from "../../data/languages.json"
import { userContext } from "../../main";
import getLang from "../../main";
import Tech from "./tech/tech";

function Main(){
    const slides = ["HTML","CSS","Javascript","Tailwind","Bootstrap","Git","GitHub","Sass","Pug","NodeJS","Typescript","React"];
    const lang = getLang(useContext(userContext));
        return(
            <main>
                <div className="space"></div>
                <section id={language.header[lang][0]}>
                    <h3 className="text-zinc-400">{language.presentation[lang][0]}</h3>
                    <h1 className="my-5">Marcos González</h1>
                    <h3 className="text-zinc-400">Frontend Developer</h3>
                    <img id="pfp"/>
                </section>
                <div className="space"></div>
                <section id={language.header[lang][1]}>    
                    <div className="flex justify-center">
                        <div className="justify-center items-center">
                            <h2>{language.header[lang][1]}</h2>
                            <p className="items-center text-zinc-300">
                                <br /><br />
                                {language.about[lang][0]}
                                <br /><br />
                                {language.about[lang][1]}
                                <br /><br />
                                {language.about[lang][2]}
                            </p>
                        </div>
                    </div>
                    <h3 className="mt-9 text-zinc-400">{language.tech[lang][0]}</h3>
                    <div id="root" className="slides flex flex-wrap justify-center">
                        <Tech name="Control de versiones" src="./img/github.svg"></Tech>
                        <Tech name="Framework" src="./img/react.svg"></Tech>
                        <Tech name="Preprocesadores" src="./img/sass.svg"></Tech>
                        <Tech name="Backend" src="./img/nodejs.svg"></Tech>
                    </div>
                </section>
                <section id={language.header[lang][2]}>
                    <h2>{language.header[lang][2]}</h2>
                    <Card src="hyassets" site="hyassets.netlify.app" repo="HyAssetsWeb" cardId={1}/>
                </section>
                <section id={language.header[lang][3]}>
                    <h2>{language.header[lang][3]}</h2>
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
                                placeholder={language.form[lang][0]}
                                name = "name"
                                autoComplete="off"
                                className="text bg-zinc-900 text-primary"
                                required />
                            <input 
                                type="email" 
                                placeholder={language.form[lang][1]}
                                name = "mail"
                                autoComplete="off"
                                className="text bg-zinc-900 text-primary"
                                required />
                        </div>
                        <div className="flex justify-center">
                            <textarea 
                                placeholder={language.form[lang][2]}
                                name = "message"
                                className="text bg-zinc-900 text-primary resize-none"
                                required></textarea>
                        </div>
                        <div className="flex justify-center items-center w-full my-5">
                            <button className="primary h-12 transition-all hover:-translate-y-1 mx-8" type="submit">{language.form[lang][3]}</button>
                            <button className="secondary h-12 transition-all hover:-translate-y-1 mx-8" onClick={()=>(window.location.href = '/docs/cv.pdf')}>{language.form[lang][4]}</button>
                        </div>
                    </form>
                    <p className="m-8 text-center text-zinc-300" id="cont">{language.form[lang][5]}</p>
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