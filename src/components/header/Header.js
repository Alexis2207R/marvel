import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="navbar-area">
      <div className="adbar-area bg-black d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 align-self-center">
              <div className="logo text-md-left text-center">
                <span className="main-logo">
                  <img src="assets/img/logo.svg" alt="img" width={"200px"} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
