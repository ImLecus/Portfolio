import { Link } from "react-scroll";
import language from "../../../data/languages.json";
import { useContext } from "react";
import { userContext } from "../../../main";
import { navbarContext } from "../header";
import getLang from "../../../main";

function NavBottom (props:any){
    const lang = getLang(useContext(userContext));
    const active = useContext(navbarContext);
    const menuItems = [
        {
            id:5, content: language.header[lang][0]
        },
        {
            id:6, content: language.header[lang][1]
        },
        {
            id:7, content: language.header[lang][2]
        },
        {
            id:8, content: language.header[lang][3]
        }
        ];
    return(
        <div id="navBottom" className={"w-full sticky top-0 bg-zinc-900 " + (active? "bottomActive":"")}>
            {menuItems.map(item => (
                <div className="flex justify-center" key={item.id}>
                    <Link className="navLink bottom" 
                          to={item.content} 
                          smooth={true}
                          offset={-250}
                          duration={500}
                          onClick={props.event}
                          >{item.content}</Link>
                </div>
                    
                ))}      
        </div>
    );
}

export default NavBottom;