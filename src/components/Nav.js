import React from "react";

const Nav = () => {
  return (
    <nav
      className="blue lighten 1"
      style={{ paddingLeft: 10, paddingRight: 10 }}
    >
      <div className="nav-wrapper">
        <a href="/" className="brand-logo" aria-label="home">
          Widget Depot
        </a>
        <a href="/profile" aria-label="profile">
          <i role="button" className="large material-icons right" tabIndex="0">
            account_circle
          </i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
