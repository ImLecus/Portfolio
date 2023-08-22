import ReactDOM from "react-dom/client";
import { createContext, useState } from "react";

import Header from "./components/header";
import Main from "./components/main";

import "./styles/style.css";
import "./styles/header.css";
import "./styles/title.css";
import "./styles/main.css"

export const userContext = createContext("");
function App() {
  const [lang, setLang] = useState("en");
  const changeLang = (e) => {
    setLang(e);
  };
  return (
    <userContext.Provider value={lang}>
      <Header action={changeLang} />
      <Main />
    </userContext.Provider>
  );
}
let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />);
