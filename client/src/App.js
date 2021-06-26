import React, { Component } from "react";
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Budget from "./pages/Budget/Budget"
import Invest from "./pages/Invest/Invest"
import Goals from "./pages/Goals/Goals"
import Dashboard from "./pages/Dashboard/Dashboard"


import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

//app js
function App() {
  return (
    //Set up real routes
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App">
        {/* <Navbar /> */}
        {/* <ScrollToTop /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/budget" component={Budget} />
          <Route path="/invest" component={Invest} />
          <Route path="/goals" component={Goals} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
    
    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React this is cool</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
}


export default App;
