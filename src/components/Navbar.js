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
  React.useEffect(() => {
    if (navbarOpen)
      setNavbarOpen(!navbarOpen)
  }, [pageSelected])

  let pageSelectedStyle = { borderBottom: "2.2px solid #29DB9B", textUnderlinePosition: "under" }

  return (
    <div>
      <nav className="w-full lg:w-11/12 z-10 flex flex-wrap items-center justify-between px-3 lg:mx-24 font-sans">
        <div className="container px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm mt-6 font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
              onClick={() => setPageSelected({
                ...pageSelected, home: true, "team": false, "events": false, "projects": false, "blogs": false, "contact": false
              })}
              to="/"
            >
              <img src={comsoclogo} alt="Comsoc Logo" className="h-16"></img>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none pt-4 block lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xl pt-5 lg:pt-0 lg:text-lg">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setPageSelected({
                    ...pageSelected, home: true, "team": false, "events": false, "projects": false, "blogs": false, "contact": false
                  })}
                  className="lg:px-7 py-2 lg:py-0 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.home ? pageSelectedStyle : {}}>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Team"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": true, "events": false, "projects": false, "blogs": false, "contact": false })}
                  className="lg:px-7 py-2 lg:py-0 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.team ? pageSelectedStyle : {}}>The Team</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Events"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": true, "projects": false, "blogs": false, "contact": false })}
                  className="lg:px-7 py-2 lg:py-0 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.events ? pageSelectedStyle : {}}>Events</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Projects"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": true, "blogs": false, "contact": false })}
                  className="lg:px-7 py-2 lg:py-0 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.projects ? pageSelectedStyle : {}}>Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Blogs"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": false, "blogs": true, "contact": false })}
                  className="lg:px-7 py-2 lg:py-0 flex items-center text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2" style={pageSelected.blogs ? pageSelectedStyle : {}}>Blogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  onClick={() => setPageSelected({ ...pageSelected, home: false, "team": false, "events": false, "projects": false, "blogs": false, "contact": true })}
                  className="lg:px-7 py-2 lg:py-0 flex items-center text-white hover:opacity-75">
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