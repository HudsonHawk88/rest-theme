import React from "react";
import { Navbar } from "reactstrap";
import NavItem from "./Items.js";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavItem>
          <NavLink to="/" className="navbar-brand">
            CH Restaurant
          </NavLink>
        </NavItem>
        <Navbar>
          <NavItem>
            <a href="#">Főoldal</a>
          </NavItem>
          <NavItem>
            <a href="#szolgaltatasok">Szolgáltatások</a>
          </NavItem>
          <NavItem>
            <a href="#etelek">Ételek</a>
          </NavItem>
          <NavItem>
            <a href="#rolunk">Rólunk</a>
          </NavItem>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
