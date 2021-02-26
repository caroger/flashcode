import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

class DecksIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='deck-index-div'>
                <div>
                    <Link to="/decks/today" className='deck-button' id='daily'>
                        <FontAwesomeIcon icon={faCalendarCheck} />Daily Deck
                    </Link>
                </div>
                <div>
                    <Link to="/decks/hard" className='deck-button' id='hard'>
                        Difficult Deck
                    </Link>
                    <Link to="/decks/medium" className='deck-button' id='medium'>
                        Medium Deck
                    </Link>
                    <Link to="/decks/easy" className='deck-button' id='easy'>
                        Easy Deck
                    </Link>
                </div>
            </div>
        )
    }
}

export default DecksIndex;