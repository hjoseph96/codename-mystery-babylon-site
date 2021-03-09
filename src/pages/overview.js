import React from "react";
import loadable from '@loadable/component';
import ReactFullpage from '@fullpage/react-fullpage';

import '../scss/overview.scss'

import Navbar from '../components/Navbar';
const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));


class Overview extends React.Component {
  render() {
    const FullPage = () => (
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
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
                      </p>
                    </div>
                  </div>
                </main>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );

    return (
      <div className="overview">
        <Navbar />
        <PurpleSmoke />

        <FullPage />
      </div>
    )
  }
}

export default Overview;
