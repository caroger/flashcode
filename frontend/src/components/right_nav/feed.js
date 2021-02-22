// - Render achievements feed for last 24hrs
// - Achievement - array of objects to be rendered on login
// - Use selector to grab achievements array, slicing for date/time
// - Need to figure out milestones for updates
// - Do we need another table?
//--------------------------------------------------------------------------------------------------

import React from 'react';

class Feed extends React.Component{
    constructor(props){
        super(props);
    }

    //add a helper function here that iterates thru array of achievements to load onto feed.
    //24 hour max
    

    render(){
        //css overflow scroll
        return(
            <div className='feed-div'>
                <h4 className='feed-title'>News Feed</h4>
                {/* feed title letter spacing */}
                <ul className ='feed-ul'>
                    <li className='feed-li'>Dongsoo has completed his first problem!</li>
                    <li className='feed-li'>Dongsoo has completed 5 problems in a row!</li>
                    <li className='feed-li'> Dongsoo has completed 10 problems in a row!</li>
                    <li className='feed-li'>Dongsoo has completed 20 problems in a row!</li>
                    <li className='feed-li'>Dongsoo has completed 30 problems in a row!</li>
                    <li className='feed-li'>Dongsoo has completed 40 problems in a row!</li>
                </ul>
            </div>
        )
    }
}

export default Feed;