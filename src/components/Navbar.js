import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

import '../scss/navbar.scss';

class Navbar extends React.Component {

  render() {
    return (
      <div class="navbar">
        <div></div>

        <div>
          <div class="links">
            <Link to="/overview">The Game</Link>
            <Link to="/devlog">Devlog</Link>
            <Link to="/team">Our Team</Link>
          </div>

          <div className="social">
            <a href="https://twitter.com/CodenameBabylon/" className="icon-button twitter" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icon-twitter"/>
              <span>
              </span>
            </a>

            <a href="https://discord.gg/CaJCFcXB" className="icon-button discord" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDiscord} className="icon-discord"/>
              <span>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
