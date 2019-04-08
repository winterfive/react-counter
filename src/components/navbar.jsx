import React, { Component } from "react";

// Stateless Functional Component
// returns a react element without state

const NavBar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
