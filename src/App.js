import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fooldal from "./components/contents/Landingpage";
import Szolgaltatasok from "./components/contents/Szolgaltatasok";
import Etelek from "./components/contents/Etelek";
import Rolunk from "./components/contents/Rolunk";
import "./App.css";

window.onscroll = function() {
  myFunction();
};
var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 ">
          <Router>
            <div className="row ">
              <div
                className="navbar col-md-12"
                style={{ position: "fixed", top: 0, zIndex: 999 }}
              >
                <Navbar />
              </div>
              <hr />
            </div>
            <div className="row">
              <div
                id="content"
                className="content d-flex justify-content-center"
              >
                <div className="parallax" />
                <div className="tartalom">
                  <Fooldal />
                  <a name="szolgaltatasok" />
                  <div className="parallax" />
                  <div className="szolgaltatasok">
                    <Szolgaltatasok />
                  </div>
                  <a name="etelek" />
                  <div className="parallax" />
                  <div className="etelek">
                    <Etelek />
                  </div>
                  <a name="rolunk" />
                  <div className="parallax" />
                  <div className="rolunk">
                    <Rolunk />
                  </div>
                  <div className="parallax" />
                </div>
              </div>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
