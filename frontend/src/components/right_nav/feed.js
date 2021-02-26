// - Render achievements feed for last 24hrs
// - Achievement - array of objects to be rendered on login
// - Use selector to grab achievements array, slicing for date/time
// - Need to figure out milestones for updates
// - Do we need another table?
//--------------------------------------------------------------------------------------------------

import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  //add a helper function here that iterates thru array of achievements to load onto feed.
  //24 hour max

  render() {
    //css overflow scroll
    return (
      <div className="feed-container">
        <div className="feed-header">News Feed</div>
        <div className="feed-body-container">
          <div className="feed-item">Dongsoo has completed 5 problems in a row!</div>
          <div className="feed-item"> Dongsoo has completed 10 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 20 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 30 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 40 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 50 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 60 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 70 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 80 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 90 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 100 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 100 problems in a row!</div>
          <div className="feed-item">Dongsoo has completed 100 problems in a row!</div>
        </div>
      </div>
    );
  }
}

export default Feed;
