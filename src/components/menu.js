import React from 'react'
import { Link } from '@reach/router'
import './menu.css'

const Menu = () => (
  <div className="header">
    <Link to="/">
      <img className="logoHeader" src={require('../img/lbc.png')} />
    </Link>
    <ul>
      <li className="linko">
        <Link to="/book">Book</Link>
      </li>
      <li className="linko">
        <Link to="/agence">Agence</Link>
      </li>
      <li className="linko">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Menu
