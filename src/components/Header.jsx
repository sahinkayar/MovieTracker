import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}> Movies to watch </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to={"/watched"}>Watched Movies</Link>
            </li>
            <li>
              <Link to={"/add"}>
                {" "}
                <i className="fa-solid fa-plus"></i>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
