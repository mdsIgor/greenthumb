/* global ROUTES */

import { Link } from "gatsby"

import "./index.styl"

const { home, about } = ROUTES

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="items">
        <li className="item">
          <Link to={home.path}>Home</Link>
        </li>
        <li>
          <Link to={about.path}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
