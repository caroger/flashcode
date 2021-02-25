import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
// import LoggedInComponent from './logged_in/logged_in_component';
// import LoggedOutComponent from './logged_out/logged_out_component';

import Modal from '../modal/modal';
import NavBarContainer from '../nav/navbar_container';
import LoggedinContainer from './logged_in/logged_in_container';
import CardsIndexContainer from '../cards/card_index_container';

// class MainPage extends React.Component {

  
//   render() {
//     if(this.props.signedIn){
//       return(
//        <Redirect to='/home' />
//       )} else{
//       return (
//         <div><LoggedOutComponent /></div>
//       )} 

//   }
// }

// export default MainPage;

export default () => (
  <div className="main-app-container">
    <Route exact path="/home" component={LoggedinContainer} />
  </div>
);