import Home from "./components/Home.jsx";
import React from "react";
import "./App.css";
import Header from "./components/layout/Header.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      {/* 
        Home Page
            Header
            
            Banner
                Search
            
            Card
            
            Footer 
            
        Search Page
            Header
        */}
    </div>
  );
}

export default App;
