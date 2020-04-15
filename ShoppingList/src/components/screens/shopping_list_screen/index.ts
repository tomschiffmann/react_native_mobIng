import ShoppingListScreen from './ShoppingListScreenContainer';

export interface ShoppingArticle {
  _id: string;
  text: string;
  done: boolean;
}

export default ShoppingListScreen;
