import React from 'react';
import loadable from '@loadable/component';

import Navbar from '../components/Navbar';
import BackHomeLogo from '../components/BackHomeLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGmail } from '@fortawesome/free-brands-svg-icons';

import '../scss/team.scss';
import '../fonts/fonts.scss';

import herbertImg from '../../static/copywright.gif';
import artemiiImg from '../../static/artemii.png';
import scythuzImg from '../../static/scythuz.png';
import vnittiImg from '../../static/vnitti.png';

import SEO from "../components/seo";
const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));


class Team extends React.Component {
  render() {
    return (
      <div className="team">
        <SEO
          title="Our Team"
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

        <main>
          <h1>Team</h1>
          <ul className="team-list">
            <li>
              <div className="photo">
                <img src={herbertImg} alt="Herbert Hoseph" />
              </div>

              <div className="info">
                <h3>Herbert Joseph</h3>
                <span className="role">Programmer</span>

                <div className="socials">
                  <a href="https://twitter.com/JTechniquea2z">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="photo">
                <img src={artemiiImg} class="artemii" alt="Artemii" />
              </div>

              <div className="info">
                <h3>Artemii Zotikov</h3>
                <span className="role">Programmer</span>

                <div className="socials">
                  <a href="mailto:tazdraperm.dev@gmail.com">
                    <span class="fab fa-gmail fa-lg"></span>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="photo">
                <img src={scythuzImg} class="pixel-artist" alt="Artemii" />
              </div>

              <div className="info">
                <h3>Benjamin Carr</h3>
                <span className="role">Pixel Artist</span>

                <div className="socials">
                  <a href="https://twitter.com/scythuz">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="photo">
                <img src={vnittiImg} class="pixel-artist" alt="Artemii" />
              </div>

              <div className="info">
                <h3>Vicente Nitti</h3>
                <span className="role">Pixel Artist</span>

                <div className="socials">
                  <a href="https://twitter.com/vnitti_art">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>
    )
  }
}

export default Team;
