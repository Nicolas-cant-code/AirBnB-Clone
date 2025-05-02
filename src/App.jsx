import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchPage from "./components/SearchPage.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Route path="/">
          <Modal />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
