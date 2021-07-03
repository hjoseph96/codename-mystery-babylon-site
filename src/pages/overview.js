import React from "react";

import loadable from '@loadable/component';
import ReactFullpage from '@fullpage/react-fullpage';

import '../scss/overview.scss'
import '../fonts/fonts.scss';

import { CookiesProvider } from 'react-cookie';


import SEO from "../components/seo";
import Navbar from '../components/Navbar';
import BackHomeLogo from '../components/BackHomeLogo';


const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));
const GameplayVideos = loadable(() => import('../components/GameplayVideos'));


class Overview extends React.Component {
  render() {
    const FullPage = () => (
      <ReactFullpage
        scrollingSpeed = {1656}
        navigation

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <main>
                  <h2>Infiltrate The Ranks of The Wicked</h2>

                  <div className="scroll">
                    <div className="text-container">
                      <p>
                        The rich and powerful of the land operate secret
                        organizations, unbeknownst to most. Their greed and depravity
                        knows no bounds, as they covertly wrest control of all the nations.

                        <br></br> <br></br>

                        <b>It is up to you to bring this injustice to light!</b>
                      </p>
                    </div>
                  </div>
                </main>
              </div>
              <div className="section">
                <main>
                  <h2>Wage War Against The Beast</h2>

                  <GameplayVideos />

                </main>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );

    return (
      <CookiesProvider>
        <div className="overview">
          <SEO
            title="Overview"
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
          <BackHomeLogo />
          <PurpleSmoke />

          <FullPage />
        </div>
      </CookiesProvider>
    )
  }
}

export default Overview;
