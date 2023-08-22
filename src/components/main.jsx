import { useContext } from "react";
import language from "../data/languages.json";
import { userContext } from "../App";
import Title from "./title";
import Contact from "./contact";

function Card({ site, src }) {
  return (
      <button className="card" onClick={() => window.location.href = "https://" + site}>
        <img alt="cardImage" src={"./images/" + src + ".webp"}></img>
      </button>
  );
}

function Tech({title}) {
  return (
    <div className="tech">
      <img src={`./images/${title.toLowerCase()}.svg`} />
      <p>{title}</p>
    </div>
  )
}

export default function Main() {

  const lang = useContext(userContext);
  return (
    <>
      
      <main>

        <section>
          <h3>{language.presentation[lang][0]}</h3>
          <Title />
        </section>

        <section id={language.header[lang][0]} className="sectionAbout">
          <div className="flex-col">
              <h2>{language.header[lang][0]}</h2>
              <p>
                <br />
                <br />
                {language.about[lang][0]}
                <br />
                <br />
                {language.about[lang][1]} 
              </p>
          </div>
          <h3>{language.tech[lang][0]}</h3>
          <div className="flex flex-wrap">
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
          <div className="flex justify-center">
            <Contact />
          </div>  
        </section>

      </main>

      <footer>
        <p>Made with 💙 by Marcos González</p>
      </footer>
    </>
  );
}
