import React from "react";
import { Link } from "react-router-dom";
import comsoclogo from "../images/comsoclogo.png"
import sun from "../images/sun.png"
import moon from "../images/moon.png"

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [pageSelected, setPageSelected] = React.useState({
    "home": false,
    "team": false,
    "events": false,
    "projects": false,
    "blogs": false,
    "contact": false,
  })

  React.useEffect(() => {
    let pageName = window.location.href.toLowerCase().split('/').slice(-1)[0]
    if (pageName === '')
      setPageSelected({ ...pageSelected, home: true })
    else
      setPageSelected({ ...pageSelected, [pageName]: true })
  }, [])

  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  const handleThemeToggle = () => {
    if (theme === "light")
      localStorage.setItem("theme", "dark")
    else
      localStorage.setItem("theme", "light")
    window.dispatchEvent(new Event('storage'))
  }

  let pageSelectedStyle = { paddingBottom:"6px", borderBottom: "2.5px solid #29DB9B", textUnderlinePosition: "under"}

  return (
    <div>
      <nav className="w-11/12 z-10 fixed flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 mx-24 dark:bg-darktheme">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              to="/"
            >
              <img className="w-11" src={comsoclogo} alt="Comsoc Logo"></img>
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
                <Link
                  to="/"
                  onClick={() => setPageSelected({
                    ...pageSelected, home: true, "team": false, "events": false, "projects": false, "blogs": false, "contact": false
                  })}
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.home ? pageSelectedStyle : {}}>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Team"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": true, "events": false, "projects": false, "blogs": false, "contact": false })}
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.team ? pageSelectedStyle : {}}>Team</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Events"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": true, "projects": false, "blogs": false, "contact": false })}
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.events ? pageSelectedStyle : {}}>Events</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Projects"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": true, "blogs": false, "contact": false })}
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.projects ? pageSelectedStyle : {}}>Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Blogs"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": false, "blogs": true, "contact": false })}
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.blogs ? pageSelectedStyle : {}}>Blogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": false, "blogs": false, "contact": true })}
                  className="px-3 py-2 flex items-center dark:text-white font-medium leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.contact ? pageSelectedStyle : {}}>Contact</span>
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