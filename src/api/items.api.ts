import axios from 'axios';
import { Item } from 'src/types/items.types';

const baseUrl = `${process.env.API_URL}/items`;

const routes = {
  GET_ITEMS: '/all',
};

export default class ItemsApi {
  static async getItems(): Promise<Item[]> {
    const requestUrl = `${baseUrl}${routes.GET_ITEMS}`;
    const { data } = await axios.get<Item[]>(requestUrl);
    return data;
  }
}
