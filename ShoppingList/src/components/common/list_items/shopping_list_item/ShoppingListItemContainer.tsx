/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import ShoppingListItemComponent from './ShoppingListItemComponent';
import {ShoppingArticle} from 'src/components/screens/shopping_list_screen';

export interface Props {
  item: ShoppingArticle;
}
const ShoppingListItemContainer = (props: Props) => {
  return <ShoppingListItemComponent {...props} />;
};

export default ShoppingListItemContainer;
