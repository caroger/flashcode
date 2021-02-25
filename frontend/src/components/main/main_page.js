import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import LoggedinContainer from './logged_in/logged_in_container';
import CardsIndexContainer from '../cards/card_index_container';
import LeftNav from '../left_nav/left_nav';


export default () => (
  <div className="main-app-container">
    {/* <Route component={LeftNav} /> */}
    <Route component={LoggedinContainer} />

    {/* <Route path="/home" component={CardsIndexContainer} /> */}
  </div>
);