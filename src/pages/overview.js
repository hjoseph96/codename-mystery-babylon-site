import React from "react";
import loadable from '@loadable/component';
import ReactFullpage from '@fullpage/react-fullpage';

import Navbar from '../components/Navbar';
const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));


class Overview extends React.Component {
  render() {
    const Fullpage = () => (
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
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


      </div>
    )
  }
}

export default Overview;
