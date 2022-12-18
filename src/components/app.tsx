import {createContext, useState} from 'react'
import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'

export const userContext = createContext("");
function App(){
    const [lang,setLang] = useState("es");
    const changeLang = (e:any) => {
      setLang(e);
    }
    return(
      <userContext.Provider value={lang}>
        <Header event={changeLang}/>
        <Main />
        <Footer />
      </userContext.Provider>
    );
}
export default App;