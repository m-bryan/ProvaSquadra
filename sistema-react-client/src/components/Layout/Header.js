import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            Sistema de Segurança Digital
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
