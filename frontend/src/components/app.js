import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import Modal from './modal/modal';
import LoggedOutComponent from '../components/main/logged_out/logged_out_component';
import TeamPage from './main/logged_out/team_page';
import '../styles/app.scss';

const App = () => (
  <div>
      <Route component={NavBarContainer} />
      <Route component={Modal} />
      
      <ProtectedRoute path="/home" component={MainPage} />
      <ProtectedRoute path="/decks/:deckId" component={MainPage} />

      <AuthRoute exact path="/" component={LoggedOutComponent} />
      <Route exact path="/team" component={TeamPage} />
  </div>
);

export default App;
