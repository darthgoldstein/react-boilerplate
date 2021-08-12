import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import ItemsApi from '@api/items.api';
import { appState } from '@state/appState.store';
import { RouteSwitcher } from '@router/routeSwitcher.component';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const items = await ItemsApi.getItems();
    appState.items = items;;
  };

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <RouteSwitcher />
      </BrowserRouter>
    </>
  );
};
