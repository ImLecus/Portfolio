import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import language from "../data/languages.json";
import { userContext } from "../App";

function Tech({ src, name, description }) {
  return (
    <div className="tech shadow-xl" data-aos="flip-left">
      <img src={src}></img>
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
        <img alt="cardImage" src={"/img/" + src + ".jpg"}></img>
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
        <section id={language.header[lang][0]}>
          <h3>{language.presentation[lang][0]}</h3>
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
          <h3>Frontend + React Native Developer</h3>
          <img id="pfp" />
        </section>
        <div className="space"></div>
        <section id={language.header[lang][0]}>
          <div className="flex justify-center">
            <div className="justify-center items-center">
              <h2>{language.header[lang][0]}</h2>
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
          </div>
          <h3 className="mt-9 text-zinc-400">{language.tech[lang][0]}</h3>
          <div id="root" className="slides flex flex-wrap justify-center">
            <Tech
              name={language.version_control[lang][0]}
              src="./img/github.svg"
              description={language.version_control[lang][1]}
            />
            <Tech
              name={language.framework[lang][0]}
              src="./img/react.svg"
              description={language.framework[lang][1]}
            />
            <Tech
              name={language.preprocessor[lang][0]}
              src="./img/sass.svg"
              description={language.preprocessor[lang][1]}
            />
            <Tech
              name={language.mobile[lang][0]}
              src="./img/android.svg"
              description={language.mobile[lang][1]}
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
