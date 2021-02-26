// render logo, user handle, search (to be implemented later)
// add
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_actions';
import DecksIndex from './decks/decks_index';
import { Link } from 'react-router-dom';



class LeftNav extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    createBtn() {
        return <button className = 'deck-button' onClick={() => this.props.openModal('createCard')}>Create a Card</button>;
    }
    
    render(){
        
        return(

            <div className='left-nav-container'>
                <div className = 'welcome-message'>
                    <h1>Welcome, {this.props.currentUser.username}</h1>
                </div>
                <div>
                    {this.createBtn()}
                </div>
                <div>
                    <Link className='left-nav-button' to="/home">Cards Index</Link>
                </div>
                <div>
                    <DecksIndex />
                </div>

            </div>
        )
    }

}

export default LeftNav;