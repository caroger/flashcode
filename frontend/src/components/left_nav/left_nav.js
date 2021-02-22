// render logo, user handle, search (to be implemented later)
// 
import React from 'react';
import DecksIndex from './decks/decks_index';

class LeftNav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
            <div className='left-nav-div'>
                <h1>Logo goes here</h1>
                <div>Welcome, {this.props.currentUser}</div>
                <div>Index link goes here</div>
                <DecksIndex />
            </div>
        )
    }

}

export default LeftNav;