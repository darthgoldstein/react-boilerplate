import { makeAutoObservable, configure } from 'mobx';
import { Item } from 'src/types/items.types';

export default class AppState {
  constructor() {
    makeAutoObservable(this);
  }

  items: Item[] = [];
}

configure({ enforceActions: 'never' });

export const appState = new AppState();
