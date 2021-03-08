import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';


import SEO from "../components/seo"
import Button from "../components/button"

import loadable from '@loadable/component'
import '../fonts/fonts.scss';
import '../scss/home.scss';


const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));

class IndexPage extends React.Component {
  render() {

    return (
      <>
        <div class="home">
          <SEO
            title="Home"
            keywords={[`Codename`, `Mystery`, `Babylon`, `SRPG`, `Fire Emblem`, `Shining Force`]}
          />

          <div class="navbar">
            <div></div>

            <div>
              <div class="links">
                <a href="#">The Game</a>
                <a href="#">Devlog</a>
                <a href="#">Our Team</a>
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

          <PurpleSmoke />

          <div className="header">
            <h1>
              Codename: Mystery Babylon
            </h1>
          </div>

          <div className="logo-container">

            <div className="logo-circle">
              <img src="./purplefire.gif" className="gray-flames" alt="Purple Flames" />
              <img src="./CMB_logo.png" className="game-logo" alt="Codename: Mystery Babylon Logo" />
            </div>
          </div>

          <div className="coming-soon">
            <h2>Coming Soon</h2>
            <ul class="platform-list">
              <li class="steam">
                <img src="./steam-logo.png" alt="Steam Logo" />
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default IndexPage
