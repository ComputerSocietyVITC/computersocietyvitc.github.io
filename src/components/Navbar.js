import React from "react";
import { Link } from "react-router-dom";
import comsoclogo from "../images/comsoclogo.png"

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

  let pageSelectedStyle = { paddingBottom: "2px", borderBottom: "2.5px solid #29DB9B", textUnderlinePosition: "under" }

  return (
    <div>
      <nav className="w-11/12 z-10 fixed flex flex-wrap items-center justify-between px-2 mx-24 font-sans">
        <div className="container px-4 mr-10 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm mt-6 font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
              onClick={() => setPageSelected({
                ...pageSelected, home: true, "team": false, "events": false, "projects": false, "blogs": false, "contact": false
              })}
              to="/"
            >
              <img src={comsoclogo} alt="Comsoc Logo" className="h-20"></img>
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
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xl">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setPageSelected({
                    ...pageSelected, home: true, "team": false, "events": false, "projects": false, "blogs": false, "contact": false
                  })}
                  className="px-7 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.home ? pageSelectedStyle : {}}>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Team"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": true, "events": false, "projects": false, "blogs": false, "contact": false })}
                  className="px-7 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.team ? pageSelectedStyle : {}}>The Team</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Events"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": true, "projects": false, "blogs": false, "contact": false })}
                  className="px-7 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.events ? pageSelectedStyle : {}}>Events</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Projects"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": true, "blogs": false, "contact": false })}
                  className="px-7 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.projects ? pageSelectedStyle : {}}>Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Blogs"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": false, "blogs": true, "contact": false })}
                  className="px-7 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.blogs ? pageSelectedStyle : {}}>Blogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": false, "blogs": false, "contact": true })}
                  className="px-7 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.contact ? pageSelectedStyle : {}}>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}