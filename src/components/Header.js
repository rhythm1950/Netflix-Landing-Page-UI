import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <a href="#" className="logo">
          <img src="images/logo.png" alt="" />
        </a>
        <ul className="nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#shop">TV Shows</a>
          </li>
          <li>
            <a href="#new">Movies</a>
          </li>
          <li>
            <a href="#about">Latest</a>
          </li>
          <li>
            <a href="#brands">My List</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
