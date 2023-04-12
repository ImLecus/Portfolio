import language from "../../../data/languages.json";
import getLang from "../../../main";
import { userContext } from "../../../main";
import { useContext } from "react";
export default function Contact(){
    const lang = getLang(useContext(userContext));
    return(
        <form method="POST" id="form" name="contactForm" data-netlify="true" action="./index.html">   
            <input 
            type='hidden'
            name='form-name'
            value='contactForm' />             
            <div className="flex justify-center items-center w-full">
                <input type="text" placeholder={language.form[lang][0]} name="name" autoComplete="off" required />
                <input type="email" placeholder={language.form[lang][1]} name="email" autoComplete="off" required />
            </div>
            <div className="flex justify-center">
                <textarea placeholder={language.form[lang][2]} name="message" required></textarea>
            </div>
            <div className="flex justify-center items-center w-full my-5">
                <button className="primary h-12 transition-all hover:-translate-y-1 mx-8" type="submit">{language.form[lang][3]}</button>
                <button className="secondary h-12 transition-all hover:-translate-y-1 mx-8" onClick={()=>(window.location.href = '/docs/cv.pdf')}>{language.form[lang][4]}</button>
            </div>
        </form>
    )
}