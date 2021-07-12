import React from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Budget from "./pages/Budget/Budget";
import Invest from "./pages/Invest/Invest";
import Goals from "./pages/Goals/Goals";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./komponent/Signup/Signup";
import Login from "./komponent/Login/Login";
import ForgotPassword from "./komponent/Forgotpass/ForgotPassword";
import PrivateRoute from "./komponent/PrivateRoute";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./contexts/Authcontext";

//app js
function App() {
  return (
    //Set up real routes

    <div className="appWrapper">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/budget" component={Budget} />
            <Route path="/invest" component={Invest} />
            <PrivateRoute path="/goals" component={Goals} />
          </Switch>
        </AuthProvider>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
