import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import LeftNav from '../../left_nav/left_nav';
import Feed from '../../right_nav/feed';
import NavBar from '../../nav/navbar';
import CardIndexContainer from '../../cards/card_index_container'

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
        debugger;
        return(
            <div className='component-div'>
                {this.redirect()}
                <LeftNav currentUser={this.props.currentUser} openModal={this.props.openModal}/>
                <CardIndexContainer />
                <Feed />
            </div>
        )
    }
}

export default LoggedInComponent;