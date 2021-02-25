// take in props and fetchDecks for current user
// map and render decks in side panel
// decks to be buttons linking to deck show page

import React from 'react';
import { Link } from 'react-router-dom';

class DecksIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='deck-index-div'>
                <Link to="/decks/today" className='deck-button' id='daily'>Daily Deck</Link>
                <Link to="/decks/hard" className='deck-button' id='hard'>Difficult Deck</Link>
                <Link to="/decks/medium" className='deck-button' id='medium'>Medium Deck</Link>
                <Link to="/decks/easy" className='deck-button' id='easy'>Easy Deck</Link>
            </div>
        )
    }
}

export default DecksIndex;