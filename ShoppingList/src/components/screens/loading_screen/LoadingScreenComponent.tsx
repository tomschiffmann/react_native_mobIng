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

export interface Props {
  onPressGoMainScreen: () => void;
}
const LoadingScreenComponent = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator />
        <Button style={styles.button} onPress={props.onPressGoMainScreen}>
          <Text style={styles.buttontext}>Go To Main Screen</Text>
        </Button>
      </View>
    </>
  );
};

export default LoadingScreenComponent;
