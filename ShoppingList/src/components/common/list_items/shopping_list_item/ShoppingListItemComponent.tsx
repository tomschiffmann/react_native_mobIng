/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {View, Text} from 'react-native';
import styles from './styles';
import {ActivityIndicator, Button} from 'react-native-paper';
import {ShoppingArticle} from 'src/components/screens/shopping_list_screen';

export interface Props {
  item: ShoppingArticle;
}
const ShoppingListItemComponent = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{flex: 1, marginLeft: 16}}>{props.item.text}</Text>
        <Text style={styles.checkText}>{props.item.done ? '✓' : '○'}</Text>
      </View>
    </>
  );
};

export default ShoppingListItemComponent;
