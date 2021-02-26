// - Render achievements feed for last 24hrs
// - Achievement - array of objects to be rendered on login
// - Use selector to grab achievements array, slicing for date/time
// - Need to figure out milestones for updates
// - Do we need another table?
//--------------------------------------------------------------------------------------------------

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import * as FA from '@fortawesome/free-brands-svg-icons';
class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  //add a helper function here that iterates thru array of achievements to load onto feed.
  //24 hour max

  renderfeed(username, num, icon) {
    return (
      <div className="feed-item">
        <h4>
          <FontAwesomeIcon icon={icon} /> {`${username}`}
        </h4>
        <br></br>
        {`Completed problem number ${num} on LeetCode!`}
      </div>
    );
  }

  render() {
    //css overflow scroll
    return (
      <div className="feed-container">
        <div className="feed-header">
          <h1>
            <FontAwesomeIcon icon={faUsers} /> User Feeds
          </h1>
        </div>
        <div className="feed-body-container">
          {this.renderfeed('Dongsoo', '7', FA.faJava)}
          {this.renderfeed('Colin', '101', FA.faPython)}
          {this.renderfeed('Edwin', '77', FA.faNodeJs)}
          {this.renderfeed('Roger', '79', FA.faPhp)}
          {this.renderfeed('Ryan', '979', FA.faNode)}
          {this.renderfeed('Erik', '159', FA.faReact)}
          {this.renderfeed('Julia', '555', FA.faCss3)}
          {this.renderfeed('Lina', '777', FA.faReact)}
        </div>
      </div>
    );
  }
}

export default Feed;
