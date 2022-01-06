import React from "react";
import loadable from '@loadable/component';

import { CookiesProvider } from 'react-cookie';
import SEO from "../components/seo";
import NewsletterModal from "../components/NewsletterModal";

import '../fonts/fonts.scss';
import '../scss/home.scss';

import Navbar from '../components/Navbar'
const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));

class IndexPage extends React.Component {


  render() {
    return (
      <CookiesProvider>
        <div class="home">
          <SEO
            title="Home"
            keywords={[
              `Codename`,
              `Mystery`,
              `Babylon`,
              `SRPG`,
              `Fire Emblem`,
              `Shining Force`,
              `Indie`,
              `Game`,
              `Tactical`,
              `RPG`,
              `Occult`
            ]}
          />

          <Navbar />

          <PurpleSmoke />

          <div className="header">
            <img src="/logo.png"/>
          </div>

          <div className="logo-container">

            <div className="logo-circle">
              <img src="./purplefire.gif" className="gray-flames" alt="Purple Flames" />
              <img src="./CMB_logo.png" className="game-logo" alt="Codename: Mystery Babylon Logo" />
            </div>
          </div>

          <div className="coming-soon">
            <ul class="platform-list">
              <li className="steam">
                <a href="https://store.steampowered.com/app/1597250/Codename_Mystery_Babylon/" target="_blank">
                  <img src="./steam-logo.png" alt="Steam Logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </CookiesProvider>
    )
  }
}

export default IndexPage
