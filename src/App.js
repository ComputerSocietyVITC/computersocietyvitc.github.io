import "./App.css";
import "./stars.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
// Import Components
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

// Import Pages
import Home from './Pages/Home.js'
import Events from './Pages/Events.js'
import Projects from './Pages/Projects.js'
import Team from './Pages/Team.js'
import Blogs from './Pages/Blogs.js'
import Contact from './Pages/Contact.js'
import Error from './Pages/Error.js'

function App() {

  React.useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="App">
      <div className="bg-black text-white min-h-screen">
        <Router>
          <Navbar />
          <div id="starrybg">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Projects">
                <Projects />
              </Route>
              <Route exact path="/Events">
                <Events />
              </Route>
              <Route exact path="/Blogs">
                <Blogs />
              </Route>
              <Route exact path="/Team">
                <Team />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
