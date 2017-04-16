import React from "react";
import { IndexLink, Link } from "react-router"

const Nav = () => {
  return (
    <ul className="header">
      <li> <IndexLink to="/" activeClassName="active"> Andric </IndexLink> </li>
      <li> <Link to="/who" activeClassName="active"> Who? </Link> </li>
      <li> <Link to="/work" activeClassName="active"> Work </Link> </li>
      <li> <Link to="/contact" activeClassName="active"> Contact </Link> </li>
    </ul>
  )
}

export default Nav
