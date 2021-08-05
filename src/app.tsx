import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import { ItemList } from '@components/itemList.component';
import { ItemAddForm } from '@components/itemAddForm.component'

export const App = () => {
  return (
    <Box mt={2} display="flex" flexDirection="column" alignItems="center" width="100%" px={5}>
      <CssBaseline />
      <ItemAddForm />
      <ItemList />
    </Box>
  );
};
