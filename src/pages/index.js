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

              </div>

              <div className="social">
                <a href="https://twitter.com/CodenameBabylon/" className="icon-button twitter" target="_blank" rel="noreferrer">

                  <FontAwesomeIcon icon={faTwitter} className="icon-twitter"/>
                  <span>
                  </span>
                </a>

                <a href="#" className="icon-button discord" target="_blank" rel="noreferrer">

                  <FontAwesomeIcon icon={faDiscord} className="icon-discord"/>
                  <span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <PurpleSmoke />

          <div class="header">
            <h1>
              Codename: Mystery Babylon
            </h1>
          </div>

          <div class="logo-container">

            <div class="logo-circle">
              <img src="./purplefire.gif" class="gray-flames" alt="Purple Flames" />
              <img src="./CMB_logo.png" class="game-logo" alt="Codename: Mystery Babylon Logo" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default IndexPage
