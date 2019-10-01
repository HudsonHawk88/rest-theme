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
            <NavLink to="/">Főoldal</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/szolgaltatasok">Szolgáltatások</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/etelek">Ételek</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/rolunk">Rólunk</NavLink>
          </NavItem>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
