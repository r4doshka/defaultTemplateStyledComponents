/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainContainerStyles } from './styles/styles';

import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header/Header';
import RegistrationView from '../RegistrationView/RegistrationView';
import HomeView from '../HomeView/HomeView';

export default function App() {
  return (
    <div>
      <Header />
      <MainContainerStyles>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/registration" component={RegistrationView} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainContainerStyles>
    </div>
  );
}
