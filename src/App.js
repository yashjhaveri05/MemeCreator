import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./views/Main";
import CreateMeme from './views/CreateMeme';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:id/:boxes" component={CreateMeme} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
