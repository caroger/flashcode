import React from 'react';
import {Redirect} from 'react-router-dom';
import LeftNav from '../../left_nav/left_nav';
import Feed from '../../right_nav/feed';

import NavBar from '../../nav/navbar';

class LoggedInComponent extends React.Component{
    constructor(props){
        super(props);
    }

    redirect() {
        if (this.props.signedIn === false) {
            return <Redirect to="/" />
        }
    }

    render(){
        return(
            <div className='component-div'>
             {this.redirect()}
            <LeftNav />
            
            <Feed />
            </div>
        )
    }
}

export default LoggedInComponent;