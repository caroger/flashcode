// render logo, user handle, search (to be implemented later)
// 
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_actions';
import DecksIndex from './decks/decks_index';

class LeftNav extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className='left-nav-div'>
                <div className='top-left-div'>
                    <h1>Logo goes here</h1>
                    <div>Welcome, {}</div>
                    <div>Index link goes here</div>
                </div>
                <DecksIndex />
            </div>
        )
    }

}

export default LeftNav;