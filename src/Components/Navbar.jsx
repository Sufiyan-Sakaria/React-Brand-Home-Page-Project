import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/images/brand_logo.png" alt="" />
          </a>
        </div>
        <div className="navbar">
          <a>Menu</a>
          <a>Location</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <div className="btn">
        <button>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
