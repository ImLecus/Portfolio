import language from "../data/languages.json";
import { useContext, useState, createContext } from "react";
import { Link } from "react-scroll";
import { userContext } from "../App";
import getLang from "../App";

export const navbarContext = createContext(true);

function NavBottom(props) {
  const lang = getLang(useContext(userContext));
  const active = useContext(navbarContext);
  const menuItems = [
    {
      id: 5,
      content: language.header[lang][0],
    },
    {
      id: 6,
      content: language.header[lang][1],
    },
    {
      id: 7,
      content: language.header[lang][2],
    },
    {
      id: 8,
      content: language.header[lang][3],
    },
  ];
  return (
    <div
      id="navBottom"
      className={
        "w-full sticky top-0 bg-zinc-900 " + (active ? "bottomActive" : "")
      }
    >
      {menuItems.map((item) => (
        <div className="flex justify-center" key={item.id}>
          <Link
            className="navLink bottom"
            to={item.content}
            smooth={true}
            offset={-250}
            duration={500}
            onClick={props.event}
          >
            {item.content}
          </Link>
        </div>
      ))}
    </div>
  );
}

function Header({ event }) {
  const lang = getLang(useContext(userContext));
  const [isBottomActive, setBottomActive] = useState(false);
  const toggleActive = () => {
    setBottomActive(!isBottomActive);
  };
  const menuItems = language.header[lang];

  return (
    <navbarContext.Provider value={isBottomActive}>
      <header className="shadow-xl" id="nav">
        <a href="/" id="logo">
          <img src="./img/logo.png" />
        </a>
        <nav className="nav">
          {menuItems.map((item) => (
            <Link
              className="navLink hover:text-light"
              to={item}
              smooth={true}
              offset={-250}
              duration={500}
              key={menuItems.indexOf(item) + 1}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* <select onChange={(e) => {event(e.target.value)}}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select> */}
        <button id="github">
          <img src="github.svg" />
        </button>
        <button id="navDropdown" onClick={toggleActive}>
          <span id="icon"></span>
        </button>
      </header>
      <NavBottom event={toggleActive} />
    </navbarContext.Provider>
  );
}

export default Header;
