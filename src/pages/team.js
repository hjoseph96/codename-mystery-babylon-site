import React from 'react';
import loadable from '@loadable/component';

import Navbar from '../components/Navbar';
import BackHomeLogo from '../components/BackHomeLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../scss/team.scss';
import '../fonts/fonts.scss';

import herbertImg from '../../static/copywright.gif';
import artemiiImg from '../../static/artemii.png';
import dokitsuImg from '../../static/dokitsu.png';
import andrewImg from '../../static/andrew.jpg';
import zaicuchImg from '../../static/zaicuch.jpg';
import mrTheNoronhaImg from '../../static/mrthenoronha.png';
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
                <img src={herbertImg} alt="Herbert Joseph" />
              </div>

              <div className="info">
                <h3>Herbert Joseph</h3>
                <span className="role">Programmer</span>

                <div className="socials">
                  <a href="https://twitter.com/Copywright3">
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
                <img src={dokitsuImg} class="pixel-artist" alt="Dokitsu" />
              </div>

              <div className="info">
                <h3>Derwin Castillo</h3>
                <span className="role">Pixel Artist</span>

                <div className="socials">
                  <a href="http://www.derwincastillo.com/gallery.html">
                    <FontAwesomeIcon icon={faJedi} />
                  </a>

                  <a href="https://twitter.com/DerwinDoki">
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="photo">
                <img src={mrTheNoronhaImg} class="pixel-artist" alt="MrTheNoronha" />
              </div>

              <div className="info">
                <h3>Daniel Noronha</h3>
                <span className="role">Pixel Artist</span>

                <div className="socials">
                  <a href="https://www.facebook.com/danielnoronhapixelart">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="photo">
                <img src={zaicuchImg} class="pixel-artist" alt="Zaicuch" />
              </div>

              <div className="info">
                <h3>Alberto Garcia</h3>
                <span className="role">Pixel Artist</span>

                <div className="socials">
                  <a href="https://www.twitter.com/zaicucH">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="photo">
                <img src={vnittiImg} class="pixel-artist" alt="vnitti_art" />
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

            <li>
              <div className="photo">
                <img src={andrewImg} class="pixel-artist" alt="Andrew LiVecchi" />
              </div>

              <div className="info">
                <h3>Andrew LiVecchi</h3>
                <span className="role">Composer</span>

                <div className="socials">
                  <a href="http://andrewlivecchi.com">
                    <FontAwesomeIcon icon={faJedi} />
                  </a>
                  <a href="https://www.youtube.com/c/AndrewLiVecchi">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="twitter.com/AndrewLivecchi">
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
