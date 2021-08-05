import { makeAutoObservable, configure } from 'mobx';

export interface Item {
  id: number;
  name: string;
  quantity: number;
  date: Date;
}

export default class AppState {
  constructor() {
    makeAutoObservable(this);
  }

  items: Item[] = [
    {
      id: 0,
      name: 'item1',
      quantity: 1,
      date: new Date(),
    },
    {
      id: 1,
      name: 'item2',
      quantity: 2,
      date: new Date(Date.now() - (1000 * 60 * 60 * 24)),
    },
    {
      id: 2,
      name: 'item3',
      quantity: 3,
      date: new Date(Date.now() - (1000 * 60 * 60 * 24 * 2)),
    },
    {
      id: 3,
      name: 'item4',
      quantity: 4,
      date: new Date(Date.now() - (1000 * 60 * 60 * 24 * 3)),
    },
    {
      id: 4,
      name: 'item5',
      quantity: 5,
      date: new Date(Date.now() - (1000 * 60 * 60 * 24 * 4)),
    },
  ];
}

configure({ enforceActions: 'never' });

export const appState = new AppState();
