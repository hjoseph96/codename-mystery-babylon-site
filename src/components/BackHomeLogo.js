import React from 'react';
import { Link } from "gatsby"

import '../scss/back-home-logo.scss'

class BackHomeLogo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="back-home-logo">

          <div className="logo-circle">
            <img src="./purplefire.gif" className="gray-flames" alt="Purple Flames" />
            <img src="./CMB_logo.png" className="game-logo" alt="Codename: Mystery Babylon Logo" />
          </div>
        </div>
      </Link>
    )
  }
}

export default BackHomeLogo;
