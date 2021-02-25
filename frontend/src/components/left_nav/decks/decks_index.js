// take in props and fetchDecks for current user
// map and render decks in side panel
// decks to be buttons linking to deck show page

import React from 'react';

class DecksIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='deck-index-div'>
                <button className='deck-button' id='daily'>Daily Deck</button>
                <button className='deck-button' id='hard'>Difficult Deck</button>
                <button className='deck-button' id='medium'>Medium Deck</button>
                <button className='deck-button' id='easy'>Easy Deck</button>
            </div>
        )
    }
}

export default DecksIndex;