import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  return (
    <div className="App">
      <Router>
      <Navbar />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
