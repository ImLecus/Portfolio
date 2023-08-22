import language from "../data/languages.json";
import { useContext, useState, createContext } from "react";
import { Link } from "react-scroll";
import { userContext } from "../App";

export const navbarContext = createContext(true);

function NavBottom({ action }) {
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
      className={"w-full sticky top-0 " + (active ? "bottomActive" : "")}
    >
      {menuItems.map((item) => (
        <Link
          className="navLink bottom"
          to={item.content}
          smooth={true}
          offset={-250}
          duration={500}
          onClick={action}
          key={item.id}
        >
          {item.content}
        </Link>
      ))}
    </div>
  );
}

function Header({ action }) {
  const lang = useContext(userContext);
  const [isBottomActive, setBottomActive] = useState(false);
  const menuItems = language.header[lang];

  return (
    <navbarContext.Provider value={isBottomActive}>
      <header>
        <div className="flex">
          <a href="/">
            <img src="./logo.png" alt="logo" />
          </a>
          <select
            onChange={(e) => {
              action(e.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <nav>
          {menuItems.map((item) => (
            <Link
              className="navLink"
              to={item}
              smooth={true}
              offset={0}
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

        <button onClick={() => setBottomActive(!isBottomActive)} />
      </header>
      <NavBottom event={() => setBottomActive(!isBottomActive)} />
    </navbarContext.Provider>
  );
}

export default Header;
