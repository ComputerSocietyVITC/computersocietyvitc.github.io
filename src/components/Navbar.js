import React from "react";
import { Link } from "react-router-dom";
import comsoclogo from "../images/comsoclogo.png"
import sun from "../images/sun.png"
import moon from "../images/moon.png"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("light");

  const handleThemeToggle = () => {
    if (theme === "light")
      setTheme("dark")
    else
      setTheme("light")
  }

  return (
    <div className={theme}>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white dark:bg-gray-800 mb-3 mx-24">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              to="/"
            >
              <img className="w-14" src={comsoclogo} alt="Comsoc Logo"></img>
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/"
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Team"
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Team</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Events"
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Events</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Projects"
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Blogs"
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Blogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact"
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Contact</span>
                </Link>
              </li>
              <li className="nav-item ml-8">
                {theme === "light" ?
                  <img src={moon} className="h-10" alt="moon" onClick={handleThemeToggle}></img>
                  :
                  <img src={sun} className="h-10" alt="sun" onClick={handleThemeToggle}></img>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}