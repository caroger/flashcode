import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

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
                    <Link to="/decks/hard" className='deck-button hard' id='hard'>
                        <FontAwesomeIcon icon={faCircle} />Difficult Deck
                    </Link>
                    <Link to="/decks/medium" className='deck-button medium' id='medium'>
                        <FontAwesomeIcon icon={faCircle} />Medium Deck
                    </Link>
                    <Link to="/decks/easy" className='deck-button easy' id='easy'>
                        <FontAwesomeIcon icon={faCircle} />Easy Deck
                    </Link>
                </div>
            </div>
        )
    }
}

export default DecksIndex;