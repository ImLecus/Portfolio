import language from "../data/languages.json";
import { useContext, useState, createContext } from "react";
import { Link } from "react-scroll";
import { userContext } from "../App";

export const navbarContext = createContext(true);

function NavBottom({ event }) {
  const lang = useContext(userContext);
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
  ];
  return (
    <div
      id="navBottom"
      className={"w-full sticky top-0 py-5 " + (active ? "bottomActive" : "")}
    >
      {menuItems.map((item) => (
        <Link
          className="navLink bottom"
          to={item.content}
          smooth
          offset={-250}
          duration={500}
          onClick={event}
          key={item.id}
        >
          {item.content}
        </Link>
      ))}
    </div>
  );
}

function Header() {
  const lang = useContext(userContext);
  const [isBottomActive, setBottomActive] = useState(false);
  const toggleActive = () => {
    setBottomActive(!isBottomActive);
  };
  const menuItems = language.header[lang];

  return (
    <navbarContext.Provider value={isBottomActive}>
      <header id="nav">
        <a href="/" id="logo">
          <img src="./logo.png" alt="logo" />
        </a>
        <nav className="nav">
          {menuItems.map((item) => (
            <Link
              className="navLink hover:text-light"
              to={item}
              smooth
              offset={-250}
              duration={500}
              key={menuItems.indexOf(item) + 1}
            >
              {item}
            </Link>
          ))}
          <a className="github" href="https://github.com/ImLecus">
            <img src="github.svg" alt="github" />
          </a>
        </nav>

        {/* <select onChange={(e) => {event(e.target.value)}}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select> */}

        <button id="navDropdown" onClick={toggleActive}>
          <span id="icon" />
        </button>
      </header>
      <NavBottom event={toggleActive} />
    </navbarContext.Provider>
  );
}

export default Header;
