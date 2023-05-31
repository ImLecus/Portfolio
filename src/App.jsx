import ReactDOM from "react-dom/client";
import { createContext, useState } from "react";

import Header from "./components/header";
import Main from "./components/main";

import "./style.css";

export const userContext = createContext("");
function App() {
  const [lang, setLang] = useState("en");
  const changeLang = (e) => {
    setLang(e);
  };
  return (
    <userContext.Provider value={lang}>
      <Header event={changeLang} />
      <Main />
    </userContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
