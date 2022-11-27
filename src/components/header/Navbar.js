import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container nav-container">
        <div className="responsive-mobile-menu">
          <div className="logo d-lg-none d-block">
            <a className="main-logo" href="index.html">
              <img src="assets/img/logo.png" alt="img" />
            </a>
          </div>
          <button
            className="menu toggle-btn d-block d-lg-none"
            data-target="#nextpage_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-left" />
            <span className="icon-right" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="nextpage_main_menu">
          <ul className="navbar-nav menu-open">
            <li className="current-menu-item">
              <a href="#banner">Home</a>
            </li>
            <li className="current-menu-item">
              <a href="#trending">Tarjetas</a>
            </li>
            <li className="current-menu-item">
              <a href="#grid">Autores</a>
            </li>
          </ul>
        </div>
        <div className="nav-right-part nav-right-part-desktop">
          <div className="menu-search-inner">
            <input type="text" placeholder="Buscar Heroe" />
            <a href="BusquedaPersonajes.js" className="submit-btn">
              <i className="fa fa-search" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
