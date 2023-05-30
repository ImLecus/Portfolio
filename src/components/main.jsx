import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import language from "../data/languages.json";
import { userContext } from "../App";
import { Link } from "react-scroll";

function Tech({ src, name, description, color }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`tech shadow-xl ${color}`} onClick={setActive}>
      <img src={src} alt={name}></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

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
      <div className="flex justify-center items-center w-full">
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
      </div>
      <div className="flex justify-center">
        <textarea
          placeholder={language.form[lang][2]}
          name="message"
          required
        ></textarea>
      </div>
      <div className="flex justify-center items-center w-full my-5">
        <button
          className="primary h-12 transition-all hover:-translate-y-1 mx-8"
          type="submit"
        >
          {language.form[lang][3]}
        </button>
        <button
          className="secondary h-12 transition-all hover:-translate-y-1 mx-8"
          onClick={() => (window.location.href = "/docs/cv.pdf")}
        >
          {language.form[lang][4]}
        </button>
      </div>
    </form>
  );
}

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const lang = useContext(userContext);
  return (
    <>
      <main>
        <div className="space"></div>
        <section id={language.header[lang][0]} className="flex">
          <div className="title">
            <h1>Make it easier, faster and better.</h1>
            <p>Marcos González - Frontend & React Native developer</p>
            <Link to={language.header[lang][2]} smooth>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img src="./logobg.png" id="logobg" />
        </section>
        <div className="space"></div>
        <section id={language.header[lang][0]} className="whitebg">
          <img src="./logoblue.png" alt="" />
          <div>
            <h2>Who am i?</h2>
            <p className="items-center" data-aos="fade-right">
              <br />
              <br />
              {language.about[lang][0]}
              <br />
              <br />
              {language.about[lang][1]}
              <br />
              <br />
              {language.about[lang][2]}
            </p>
          </div>
        </section>
        <section>
          <h2>What i do:</h2>
          <div id="root" className="slides flex flex-wrap justify-center">
            <Tech
              name={language.version_control[lang][0]}
              src="./github.svg"
              description={language.version_control[lang][1]}
              color={"red"}
            />
            <Tech
              name={language.framework[lang][0]}
              src="./react.svg"
              description={language.framework[lang][1]}
              color={"blue"}
            />
            <Tech
              name={language.mobile[lang][0]}
              src="./android.svg"
              description={language.mobile[lang][1]}
              color={"green"}
            />
          </div>
        </section>

        <section id={language.header[lang][1]}>
          <h2>{language.header[lang][1]}</h2>
          <div className="flex justify-around flex-wrap">
            <Card src="hyassets" site="hyassets.netlify.app" />
            <Card src="platinum" site="platinum-theme.netlify.app" />
          </div>
        </section>
        <section id={language.header[lang][2]}>
          <h2>{language.header[lang][2]}</h2>
          <div className="h-16"></div>
          <Contact />
        </section>
      </main>
      <footer>
        <p>
          &copy; Marcos González 2023-2024 All rights reserved. <br />
          <br />
          Frontend Developer
        </p>
      </footer>
    </>
  );
}
