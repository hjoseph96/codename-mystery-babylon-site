import React from "react";
import loadable from '@loadable/component';
import ReactFullpage from '@fullpage/react-fullpage';

import 'plyr-react/dist/plyr.css'
import '../scss/overview.scss'

import Navbar from '../components/Navbar';
import BackHomeLogo from '../components/BackHomeLogo';

const Plyr = loadable(() => import('plyr-react'));
const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));


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

                    <Plyr controls
                      source={
                        {
                          type: "video",
                          sources: [
                            { src: "/map tour.mp4" }
                          ]
                        }
                      }
                    />
                </main>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );

    return (
      <div className="overview">
        <Navbar />
        <BackHomeLogo />
        <PurpleSmoke />

        <FullPage />
      </div>
    )
  }
}

export default Overview;
