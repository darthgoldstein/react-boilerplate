import { Box } from '@material-ui/core';
import { appState } from '@state/appState.store';
import { observer } from 'mobx-react';
import React from 'react';

export const MainPage = observer(() => {
  const { items } = appState;

  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      {items.map((item) => <Box key={item.name}>{item.name}</Box>)}
    </Box>
  );
});
