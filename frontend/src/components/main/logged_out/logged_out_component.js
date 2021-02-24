import React from 'react';
import {Link} from 'react-router-dom';

class LoggedOutComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="splash-header">
                    <h1>The Perfect Pair Programmer</h1>
                    <h5>FlashCode is the best platform to help you study LeetCode® problems, build your knowledge, and prepare for technical interviews.</h5>
                    <h3>Try FlashCode for Free</h3>
                    <Link className="main-cta" to='/signup'>
                        <button>Sign up here!</button>
                    </Link>
                </div>
                <div className="splash-content">
                    <div>hero image placeholder</div>
                    <div>
                        <h4>Spaced Repitition for the Win</h4>
                        <p>Choose how comfortable you are with a problem and FlashCode will use space repitition to resurface that problem in your Daily Review at a frequency that's right for you.</p>
                    </div>
                    <div>
                        <h4>Daily Challenges to Expand Your Learning</h4>
                        <p>Try your hand at the Daily Challenge problems to test what you've learned. Add them to your decks and grow your knowledge base.</p>
                    </div>
                    <div>
                        <h4>Add Notes to Tailor Your Studying</h4>
                        <p>Know a helpful trick to solving a problem? Capture it in your Flash Card notes to help you when you get stuck.</p>
                    </div>
                </div>
                <div>
                    <h3>Start Exploring</h3>
                    <p>FlashCode is a well-organized tool that helps you get the most out of LeetCode® by providing structure to guide your progress.</p>
                    <Link className="alt-cta" to='/signup'>Get Started</Link>
                </div>
                <footer>Copyright &copy; 2020 FlashCode</footer>
            </div>  
            ) 
    }
}

export default LoggedOutComponent;