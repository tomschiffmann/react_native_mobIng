/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';

import ShoppingListScreenComponent from './ShoppingListScreenComponent';
import {ShoppingArticle} from './index';
import {Alert} from 'react-native';

const ShoppingListScreenContainer = () => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingArticle[]>([]);
  const [tiValue, setTIValue] = useState('');

  const onPressSubmitNewItem = () => {
    if (tiValue.trim().length === 0) {
      Alert.alert('Bitte gib einen Namen für den Artikel ein');
      return;
    }
    const newShoppingItem: ShoppingArticle = {
      _id: String(Date.now() / 1000).replace('.', ''),
      text: tiValue,
      done: false,
    };
    setShoppingItems([...shoppingItems, newShoppingItem]);
  };

  const onPressChecked = (_id: string) => {
    const editedItem = shoppingItems.find((item) => item._id === _id);
    if (editedItem !== undefined) {
      editedItem.done = !editedItem.done;
      setShoppingItems([
        ...shoppingItems.filter((item) => item._id !== _id),
        editedItem,
      ]);
    }
  };

  const onPressDelete = (_id: string) => {
    setShoppingItems([...shoppingItems.filter((item) => item._id !== _id)]);
  };

  const onPressCell = (_id: string) => {
    const editedItem = shoppingItems.find((item) => item._id === _id);
    Alert.alert(
      'Was möchtest du tun?',
      undefined,
      [
        {text: 'Löschen', onPress: () => onPressDelete(_id)},
        {
          text: editedItem?.done ? 'Uncheck' : 'Check',
          onPress: () => onPressChecked(_id),
        },
        {text: 'Abbrechen', onPress: () => {}},
      ],
      {cancelable: true},
    );
  };

  return (
    <ShoppingListScreenComponent
      shoppingItems={shoppingItems}
      tiValue={tiValue}
      onTIDidChange={setTIValue}
      onPressSubmitNewItem={onPressSubmitNewItem}
      onPressChecked={onPressChecked}
      onPressDelete={onPressDelete}
      onPressCell={onPressCell}
    />
  );
};

export default ShoppingListScreenContainer;
