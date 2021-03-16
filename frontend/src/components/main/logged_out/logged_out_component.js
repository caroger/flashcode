import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cardsHeroImage from '../../../styles/images/hero_cards.png';
// import Modal from '../../modal/modal';
import { openModal } from '../../../actions/modal_actions';

class LoggedOutComponent extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <div className="splash-hero-container">
          <div className="cta-container">
            <h1>Welcome Leetcoders!</h1>
            <h2>
              FlashCode is the best platform to help you study LeetCode® problems, build your
              knowledge, and prepare for technical interviews.
            </h2>
            <h5>Try FlashCode for Free</h5>
            <button className="main-cta" onClick={() => this.props.openModal('signup')}>
              Sign up here!
            </button>
          </div>
          <div className="hero-image-container">
            <img src={cardsHeroImage} alt="hero image" />
          </div>
        </div>
        <div className="splash-content">
          <div className="callout-card">
            <h4>Spaced Repitition for the Win</h4>
            <p>
              Choose how comfortable you are with a problem and FlashCode will use space repitition
              to resurface that problem in your Daily Review at a frequency that's right for you.
            </p>
          </div>
          <div className="callout-card">
            <h4>Live messaging and community</h4>
            <p>
              See real-time as other Leetcoders complete problems and compare ideas with our live
              messaging feature, allowing you to interact with fellow studiers.
            </p>
          </div>
          <div className="callout-card">
            <h4>Add Notes to Tailor Your Studying</h4>
            <p>
              Know a helpful trick to solving a problem? Capture it in your Flash Card notes to help
              you when you get stuck.
            </p>
          </div>
        </div>
        <div className="footer-cta">
          <h2>Start Exploring</h2>
          <p>
            FlashCode is a well-organized tool that helps you get the most out of LeetCode® by
            providing structure to guide your progress.
          </p>
          <div className="alt-cta">
            <button className="second-cta" onClick={() => this.props.openModal('signup')}>
              Get Started
            </button>
          </div>
        </div>
        <footer>Copyright &copy; 2020 FlashCode</footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(LoggedOutComponent);
