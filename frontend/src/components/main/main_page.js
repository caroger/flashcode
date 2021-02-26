/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route } from 'react-router-dom';
import LoggedinContainer from './logged_in/logged_in_container';

export default () => (
  <div className="main-app-container">
    <Route component={LoggedinContainer} />
  </div>
);
