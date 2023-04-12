import ReactDOM from "react-dom/client";
import { createContext, useState } from "react";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import "./style.css";

export const userContext = createContext("");
function App() {
  const [lang, setLang] = useState("es");
  const changeLang = (e) => {
    setLang(e);
  };
  return (
    <userContext.Provider value={lang}>
      <Header event={changeLang} />
      <Main />
      <Footer />
    </userContext.Provider>
  );
}

export default function getLang(lang) {
  switch (lang) {
    case "es":
      return "es";
    case "en":
      return "en";
    case "fr":
      return "fr";
    default:
      return "es";
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
