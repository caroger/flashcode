import React from 'react';
import {Redirect} from 'react-router-dom';
import LoggedInComponent from './logged_in/logged_in_component';
import LoggedOutComponent from './logged_out/logged_out_component';



class MainPage extends React.Component {

  
  render() {
    if(this.props.signedIn){
      return(
       <Redirect to='/home' />
      )} else{
      return (
        <div><LoggedOutComponent /></div>
      )} 

  }
}

export default MainPage;
