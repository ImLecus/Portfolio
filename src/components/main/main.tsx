import {useContext, useEffect} from "react";
import "./main.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./card/card";
import language from "../../data/languages.json"
import { userContext } from "../../main";
import getLang from "../../main";
import Tech from "./tech/tech";
import Contact from "./contact/contact";

function Main(){
    useEffect( ( ) => {
        AOS.init({duration:2000});
    },[]);

    const lang = getLang(useContext(userContext));
        return(
            <main>
                <div className="space"></div>
                <section id={language.header[lang][0]}>
                    <h3 className="text-zinc-400">{language.presentation[lang][0]}</h3>
                    <h1 className="my-5">
                        <div>
                            <span>M</span>
                            <span>a</span>
                            <span>r</span>
                            <span>c</span>
                            <span>o</span>
                            <span>s</span> 
                        </div>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>  
                        <div>
                           <span>G</span>
                            <span>o</span>
                            <span>n</span>
                            <span>z</span>
                            <span>á</span>
                            <span>l</span>
                            <span>e</span>
                            <span>z</span> 
                        </div>  
                    </h1>
                    <h3 className="text-zinc-400">Frontend Developer</h3>
                    <img id="pfp"/>
                </section>
                <div className="space"></div>
                <section id={language.header[lang][1]}>    
                    <div className="flex justify-center">
                        <div className="justify-center items-center">
                            <h2>{language.header[lang][1]}</h2>
                            <p className="items-center text-zinc-300"  data-aos="fade-right">
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
                        <Tech name="Control de versiones" src="./img/github.svg" description={language.version_control[lang][0]}></Tech>
                        <Tech name="Framework" src="./img/react.svg" description={language.framework[lang][0]}></Tech>
                        <Tech name="Preprocesadores" src="./img/sass.svg" description={language.preprocessor[lang][0]}></Tech>
                        <Tech name="Backend" src="./img/nodejs.svg" description={language.backend[lang][0]}></Tech>
                    </div>
                </section>
                <section id={language.header[lang][2]}>
                    <h2>{language.header[lang][2]}</h2>
                    <div className="flex justify-around flex-wrap">
                      <Card src="hyassets" site="hyassets.netlify.app"/>
                        <Card src="astra" site="astracss.netlify.app"/>  
                    </div>
                </section>
                <section id={language.header[lang][3]}>
                    <h2>{language.header[lang][3]}</h2>
                    <div className="h-16"></div>
                    <Contact />
                </section>
            </main>
        );
}
export default Main;