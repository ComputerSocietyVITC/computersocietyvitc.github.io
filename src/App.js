import "./App.css";
import "./stars.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// Import Components
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// Import Pages
import Home from "./Pages/Home.js";
import Events from "./Pages/Events.js";
import Projects from "./Pages/Projects.js";
import Team from "./Pages/Team.js";
import Blogs from "./Pages/Blogs.js";
import Contact from "./Pages/Contact.js";
import Error from "./Pages/Error.js";

function App() {
  const RouteWithNavBarFooter = ({ children }) => (
    <Route>
      <Navbar />
      {children}
      <Footer />
    </Route>
  );

  return (
    <div className="App">
      <div className="bg-black text-white min-h-screen">
        <Router>
          {/* <Navbar /> */}
          <div id="starrybg">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Switch>
              <RouteWithNavBarFooter exact path="/">
                <Home />
              </RouteWithNavBarFooter>
              <RouteWithNavBarFooter exact path="/Projects">
                <Projects />
              </RouteWithNavBarFooter>
              <RouteWithNavBarFooter exact path="/Events">
                <Events />
              </RouteWithNavBarFooter>
              <RouteWithNavBarFooter exact path="/Blogs">
                <Blogs />
              </RouteWithNavBarFooter>
              <RouteWithNavBarFooter exact path="/Team">
                <Team />
              </RouteWithNavBarFooter>
              <RouteWithNavBarFooter exact path="/Contact">
                <Contact />
              </RouteWithNavBarFooter>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
          </div>
          {/* <Footer /> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
