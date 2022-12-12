import React from "react";
import "./main.css"

import Slide from "./slide";

import Script from "../script";
var script = new Script();
import language from "../data/languages.json";
import NavBottom from "./navbottom";
var lang = script.lang;

const slides = ["HTML","CSS","Javascript","Tailwind","Bootstrap","Git","GitHub","Sass","Pug","NodeJS","Typescript","React"];

class Main extends React.Component{

    render(){
        return(
            <main>
                <NavBottom />
                <section id={language.header[script.getLang(lang)][0]}>
                    <h3 className="text-zinc-400">{language.presentation[script.getLang(lang)][0]}</h3>
                    <h1 className="my-5">Marcos González</h1>
                    <h3 className="text-zinc-400">Frontend Developer</h3>
                    <img id="pfp"/>
                </section>
                <div className="h-28"></div>
                <section id={language.header[script.getLang(lang)][1]}>    
                    <div className="flex justify-center">
                        <div className="justify-center items-center">
                            <h2>{language.header[script.getLang(lang)][1]}</h2>
                            <p className="items-center text-zinc-300">
                                <br /><br />
                                {language.about[script.getLang(lang)][0]}
                                <br /><br />
                                {language.about[script.getLang(lang)][1]}
                                <br /><br />
                                {language.about[script.getLang(lang)][2]}
                            </p>
                        </div>
                    </div>
                    <h3 className="mt-9 text-zinc-400">{language.tech[script.getLang(lang)][0]}</h3>
                    <div id="root" className="slides flex flex-wrap">
                        {slides.map(slide => (
                            <Slide name={slide} key={slides.indexOf(slide)}/>
                        ))}
                    </div>
                </section>
                <section id={language.header[script.getLang(lang)][2]}>
                    <h2>{language.header[script.getLang(lang)][2]}</h2>
                    <div className="flex w-full justify-center">
                        <div className="card p-5 m-2 card1 transition-all flex justify-center items-center">
                            <a href="https://hyassets.netlify.app" className="transition-all">Visitar sitio</a>
                            <a href="https://github.com/ImLecus/HyassetsWeb" className="transition-all">Ver repositorio</a>
                        </div>
                    </div>
                </section>
                <section id={language.header[script.getLang(lang)][3]}>
                    <h2>{language.header[script.getLang(lang)][3]}</h2>
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
                                placeholder={language.form[script.getLang(lang)][0]}
                                name = "name"
                                autoComplete="off"
                                className="text bg-zinc-900 text-primary"
                                required />
                            <input 
                                type="email" 
                                placeholder={language.form[script.getLang(lang)][1]}
                                name = "mail"
                                autoComplete="off"
                                className="text bg-zinc-900 text-primary"
                                required />
                        </div>
                        <div className="flex justify-center">
                            <textarea 
                                placeholder={language.form[script.getLang(lang)][2]}
                                name = "message"
                                className="text bg-zinc-900 text-primary resize-none"
                                required></textarea>
                        </div>
                        <div className="flex justify-center items-center w-full my-5">
                            <button className="primary h-12 transition-all hover:-translate-y-1 mx-8" type="submit">{language.form[script.getLang(lang)][3]}</button>
                            <button className="secondary h-12 transition-all hover:-translate-y-1 mx-8" onClick={()=>(window.location.href = '/docs/cv.pdf')}>{language.form[script.getLang(lang)][4]}</button>
                        </div>
                    </form>
                    <p className="m-8 text-center text-zinc-300" id="cont">{language.form[script.getLang(lang)][5]}</p>
                    <div className="flex justify-center">
                        <a href="https://www.twitter.com/ImLecus" className="text-xl transition-all hover:text-blue-300">Twitter</a>
                        <a href="https://github.com/ImLecus" className="text-xl transition-all hover:text-blue-300">GitHub</a>
                        <a href="https://www.linkedin.com/in/marcosgf" className="text-xl transition-all hover:text-blue-300">LinkedIn</a> 
                    </div>
                </section>
            </main>
        );
    }
}
export default Main;