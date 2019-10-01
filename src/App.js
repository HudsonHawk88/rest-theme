import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fooldal from "./components/contents/Landingpage";
import Szolgaltatasok from "./components/contents/Szolgaltatasok";
import Etelek from "./components/contents/Etelek";
import Rolunk from "./components/contents/Rolunk";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 ">
          <Router>
            <div className="row ">
              <div className="navbar col-md-12">
                <Navbar />
              </div>
              <hr />
            </div>

            <div id="content" className="content d-flex justify-content-center">
              <div className="parallax" />
              <div className="tartalom">
                <Route path="/" component={Fooldal} />
                <div className="parallax" />
                <Route path="/szolgaltatasok" component={Szolgaltatasok} />
                <div className="parallax" />
                <Route path="/etelek" component={Etelek} />
                <div className="parallax" />
                <Route path="/rolunk" component={Rolunk} />
                <div className="parallax" />
              </div>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
