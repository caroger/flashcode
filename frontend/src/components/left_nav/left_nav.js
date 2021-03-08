//  TODO render logo, user handle, search (to be implemented later)
import React from 'react';
import DecksIndex from './decks/decks_index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLayerGroup, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';

class LeftNav extends React.Component {
  render() {
    return (
      <div className="left-nav-container">
        <div className="welcome-message">
          <h1>
            <FontAwesomeIcon icon={faUserAlt} /> {this.props.currentUser.username}
          </h1>
        </div>
        <div className="new-note-card-container">
          <button className="new-card-button" onClick={() => this.props.openModal('createCard')}>
            <FontAwesomeIcon icon={faPlus} />
            Add Card
          </button>
        </div>
        <div>
          <Link className="left-nav-button" to="/home">
            <FontAwesomeIcon icon={faLayerGroup} />
            My Cards
          </Link>
        </div>
        <div>
          <DecksIndex />
        </div>
        <div></div>
        <div className="social-links">
          <a
            href="https://github.com/caroger/flashcode/wiki/Group-Members-and-Work-Breakdown"
            target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    );
  }
}

export default LeftNav;
