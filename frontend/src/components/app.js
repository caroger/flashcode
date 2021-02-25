import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import '../styles/app.scss';
import MainPage from './main/main_page';
import LoggedinContainer from './main/logged_in/logged_in_container';

import CardsIndexContainer from './cards/card_index_container'; // TODO
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute path="/home/" component={LoggedinContainer} />
      <ProtectedRoute path="/cards/users/:userId" component={CardsIndexContainer} />
    </Switch>
  </div>
);

export default App;
