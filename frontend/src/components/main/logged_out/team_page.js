import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';
import Dongsoo from '../../../styles/images/artist.JPG';
import Roger from '../../../styles/images/rogerhu.png';
import Edwin from '../../../styles/images/headshot.jpg';
import Colin from '../../../styles/images/colin_eckert.jpg';

export default function TeamPage() {
  return (
    <div className="team-page-container">
      <h1>Meet the Developers</h1>
      <div className="members-container">
        <div className="member-card">
          <h2>Roger Hu</h2>
          <div class="image-cropper">
            <img src={Roger} alt="member image" class="profile-pic" />
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rogerhu1989/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/caroger" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://angel.co/u/roger-hu-6" target="_blank">
                <FontAwesomeIcon icon={faAngellist} />
            </a>
          </div>
        </div>
        <div className="member-card">
          <h2>Colin Eckert</h2>
          <div class="image-cropper">
            <img src={Colin} alt="member image" class="profile-pic" />
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/colin-eckert/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/colineckert" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://angel.co/u/colin-eckert#" target="_blank">
                <FontAwesomeIcon icon={faAngellist} />
            </a>
          </div>
        </div>
        <div className="member-card">
          <h2>Dongsoo Cha</h2>
          <div class="image-cropper">
            <img src={Dongsoo} alt="member image" class="profile-pic" />
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dongsoo-cha-72511476/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/dongsoocha/" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://angel.co/u/dongsoo-cha" target="_blank">
                <FontAwesomeIcon icon={faAngellist} />
            </a>
          </div>
        </div>
        <div className="member-card">
          <h2>Edwin Zhou</h2>
          <div class="image-cropper">
            <img src={Edwin} alt="member image" class="profile-pic" />
          </div>
          <div className="social-links">
              <a href="https://www.linkedin.com/in/edwin-zhou-a231b31b6/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/ezhou0" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faAngellist} />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
