import { useContext } from "react";
import language from "../data/languages.json";
import { userContext } from "../App";

function Card({ site, src }) {
  return (
    <div className="card">
      <button
        onClick={() => {
          window.location.href = "https://" + site;
        }}
      >
        <img alt="cardImage" src={"/" + src + ".webp"}></img>
      </button>
    </div>
  );
}

function Tech({title}) {
  return (
    <div className="tech">
      <img src={`./${title.toLowerCase()}.svg`} />
      <p>{title}</p>
    </div>
  )
}

function Contact() {
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
          className="primary transition-all mx-8"
          type="submit"
        >
          {language.form[lang][3]}
        </button>
      </div>
      
    </form>
  );
}

export default function Main() {

  const lang = useContext(userContext);
  return (
    <>
      <main>
        <section id={language.header[lang][0]}>
          <h3>{language.presentation[lang][0]}</h3>
          <h1>
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
          <h3>Frontend Developer</h3>
        </section>
        <div className="spaceXL" />
        <div className="spaceXL" />
        <section id={language.header[lang][0]} className="sectionAbout">
          <div className="space" />
          <div className="flex justify-center">
            <div className="justify-center items-center">
              <h2>{language.header[lang][0]}</h2>
              <p className="items-center">
                <br />
                <br />
                {language.about[lang][0]}
                <br />
                <br />
                {language.about[lang][1]} 
              </p>
            </div>
          </div>
          <h3>{language.tech[lang][0]}</h3>
          <div id="root" className="flex flex-wrap">
            <Tech title={"HTML"} />
            <Tech title={"CSS"} />
            <Tech title={"JavaScript"} />
            <Tech title={"React"} />
            <Tech title={"Sass"} />
            <Tech title={"Git"} />
            <Tech title={"Tailwind"} />
            <Tech title={"Bootstrap"}/>
          </div>
        </section>
        <section id={language.header[lang][1]}>
          <h2>{language.header[lang][1]}</h2>
          <div className="space" />
          <div className="flex justify-around flex-wrap">
            <Card src="hyassets" site="hyassets.netlify.app" />
            <Card src="platinum" site="platinum-theme.netlify.app" />
          </div>
        </section>
        <section id={language.header[lang][2]} className="contactSection">
          <h2>{language.header[lang][2]}</h2>
          <Contact />
        </section>
      </main>
      <footer>
        <p>
          Made with 💙 by Marcos González
        </p>
      </footer>
    </>
  );
}
