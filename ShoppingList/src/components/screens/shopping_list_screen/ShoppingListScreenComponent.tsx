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
import 'react-native-gesture-handler';
import {View, FlatList, TextInput, Text} from 'react-native';
import styles from './styles';
import {ShoppingArticle} from '.';
import ShoppingListItem from '../../common/list_items/shopping_list_item';
import StandardTextInput from '../../common/text_inputs/standard_text_input';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface Props {
  shoppingItems: ShoppingArticle[];
  tiValue: string;
  onTIDidChange: (text: string) => void;
  onPressSubmitNewItem: () => void;
  onPressChecked: (articleId: string) => void;
  onPressDelete: (articleId: string) => void;
  onPressCell: (articleId: string) => void;
}
const ShoppingListScreenComponent = (props: Props) => {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          onChangeText={props.onTIDidChange}
          placeholder={'Gib den Titel deine neuen Items ein'}
          style={styles.textinput}
        />
        <Button onPress={props.onPressSubmitNewItem}>
          <Text>Submit</Text>
        </Button>
      </View>
      <FlatList
        style={{flex: 1, backgroundColor: 'white'}}
        data={props.shoppingItems}
        renderItem={(data) => (
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => props.onPressCell(data.item._id)}>
            <ShoppingListItem item={data.item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default ShoppingListScreenComponent;
