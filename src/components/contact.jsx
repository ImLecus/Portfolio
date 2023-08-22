import { useContext } from "react";
import { userContext } from "../App";
import language from "../data/languages.json"
export default function Contact() {
  const lang = useContext(userContext);
  return (
    <form
      method="POST"
      id="form"
      name="contactForm"
      data-netlify="true"
      action="./index.html"
    >
      <input type="hidden" name="form-name" value="contactForm" />
      <div className="flex-col justify-center items-center">
        <input
          type="text"
          placeholder={language.form[lang][0]}
          name="name"
          autoComplete="off"
          required
        />
        <input
          type="email"
          placeholder={language.form[lang][1]}
          name="email"
          autoComplete="off"
          required
        />
        <textarea
          placeholder={language.form[lang][2]}
          name="message"
          required
        ></textarea>
        <button
          className="primary transition-all"
          type="submit"
        >
          {language.form[lang][3]}
        </button>
      </div>
      
    </form>
  );
}
