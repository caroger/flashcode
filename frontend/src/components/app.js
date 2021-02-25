import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import '../styles/app.scss';
import MainPage from './main/main_page';
import LoggedinContainer from './main/logged_in/logged_in_container';

import CardsIndexContainer from './cards/card_index_container'; // TODO
import Modal from './modal/modal';
import LoggedOutComponent from '../components/main/logged_out/logged_out_component';

const App = () => (
  <div>
      <Route component={NavBarContainer} />
      <Route component={Modal} />
      <ProtectedRoute path="/home" component={MainPage} />
      <AuthRoute exact path="/" component={LoggedOutComponent} />
  </div>
);

export default App;
