import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/close';
import { appState } from '@state/appState.store';
import { observer } from 'mobx-react';
import React from 'react';

export const ItemList = observer(() => {
  const { items } = appState;
  const columns = ['Name', 'Quantity', 'Date'];

  const deleteItem = (id: number) => {
    const itemToDeleteIndex = items.findIndex((item) => item.id === id);
    const newItemList = [...items];
    newItemList.splice(itemToDeleteIndex, 1);
    appState.items = newItemList;
  };

  return (
    <Box width="100%">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>
                <b>{column}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.date.toUTCString()}</TableCell>
              <IconButton onClick={() => deleteItem(item.id)}>
                <CloseIcon />
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {items.length === 0 && (
        <Box mt={2} textAlign="center" fontSize="30" fontWeight="bold">
          No items in the list.
        </Box>
      )}
    </Box>
  );
});
