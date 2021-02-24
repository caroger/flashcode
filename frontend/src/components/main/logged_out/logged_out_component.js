import React from 'react';
import {Link} from 'react-router-dom';
import tempImage from '../../../styles/images/temp_app_image.png';

class LoggedOutComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="splash-container">
                <div className="splash-hero-container">
                {/* <div className="splash-header">
                    
                </div> */}
                    <div className="cta-container">
                        <h1>The Perfect Pair Programmer</h1>
                        <h2>FlashCode is the best platform to help you study LeetCode® problems, build your knowledge, and prepare for technical interviews.</h2>
                        <h5>Try FlashCode for Free</h5>
                        <Link className="main-cta" to='/signup'>
                            <button>Sign up here!</button>
                        </Link>
                    </div>
                    <div className="hero-image-container">
                        <img src={tempImage} alt="hero image" />
                    </div>
                </div>
                <div className="splash-content">
                    <div className="callout-card">
                        <h4>Spaced Repitition for the Win</h4>
                        <p>Choose how comfortable you are with a problem and FlashCode will use space repitition to resurface that problem in your Daily Review at a frequency that's right for you.</p>
                    </div>
                    <div className="callout-card">
                        <h4>Daily Challenges to Expand Your Learning</h4>
                        <p>Try your hand at the Daily Challenge problems to test what you've learned. Add them to your decks and grow your knowledge base.</p>
                    </div>
                    <div className="callout-card">
                        <h4>Add Notes to Tailor Your Studying</h4>
                        <p>Know a helpful trick to solving a problem? Capture it in your Flash Card notes to help you when you get stuck.</p>
                    </div>
                </div>
                <div className="footer-cta">
                    <h2>Start Exploring</h2>
                    <p>FlashCode is a well-organized tool that helps you get the most out of LeetCode® by providing structure to guide your progress.</p>
                    <div className="alt-cta">
                        <Link to='/signup'>Get Started</Link>
                    </div>
                </div>
                <footer>Copyright &copy; 2020 FlashCode</footer>
            </div>  
            ) 
    }
}

export default LoggedOutComponent;