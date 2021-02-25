// render logo, user handle, search (to be implemented later)
// 
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
            <div className='left-nav-div'>
                <h1>Logo goes here</h1>
                <div className = 'welcome-message'>Welcome, {this.props.currentUser.username}</div>
                {this.createBtn()}
                <Link className='left-nav-button' to={`/cards/users/${this.props.currentUser.id}`}>
                    Cards Index
                </Link>
                <DecksIndex />
            </div>
        )
    }

}

export default LeftNav;