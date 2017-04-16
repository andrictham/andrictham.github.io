import React from "react";
import { IndexLink, Link } from "react-router"

const Nav = () => {
  return (
    <nav className="nav has-shadow">
      <div className="nav-center">
        <IndexLink to="/" activeClassName="is-active" className="nav-item is-tab"> Andric </IndexLink>
        <Link
          to="/who"
          activeClassName="is-active"
          className="nav-item is-tab">
          Who?
        </Link>
        <Link
          to="/work"
          activeClassName="is-active"
          className="nav-item is-tab">
          Work
        </Link>
        <Link
          to="/contact"
          activeClassName="is-active"
          className="nav-item is-tab">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Nav
