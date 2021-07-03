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
        < NewsletterModal />
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
            <h2>Coming Soon</h2>
            <ul class="platform-list">
              <li class="steam">
                <img src="./steam-logo.png" alt="Steam Logo" />
              </li>
            </ul>
          </div>
        </div>
      </CookiesProvider>
    )
  }
}

export default IndexPage
