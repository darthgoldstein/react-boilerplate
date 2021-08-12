import { MainPage } from '@components/mainPage';
import React from 'react';
import { Route, Switch } from 'react-router';

export const routes = {
  MAIN_PAGE: '/',
};

export const RouteSwitcher = () => {
  return (
    <Switch>
      <Route exact path={routes.MAIN_PAGE} component={MainPage} />
    </Switch>
  );
};
