import "./App.css";
import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom"

// page Components 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/contact">contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/articles/:id" >
            <Article />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
