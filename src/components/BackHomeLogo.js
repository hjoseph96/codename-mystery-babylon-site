import React from 'react';
import { Link } from "gatsby"

import '../scss/back-home-logo.scss'
import purpleFireImg from "../../static/purplefire.gif";
import logoImg from "../../static/CMB_logo.png";

class BackHomeLogo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="back-home-logo">

          <div className="logo-circle">
            <img src={purpleFireImg} className="gray-flames" alt="Purple Flames" />
            <img src={logoImg} className="game-logo" alt="Codename: Mystery Babylon Logo" />
          </div>
        </div>
      </Link>
    )
  }
}

export default BackHomeLogo;
