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

import LoadingScreenComponent from './LoadingScreenComponent';
import ScreenNames from '../../../navigation/ScreenNames';

export interface Props {
  navigation: any;
}
const LoadingScreenContainer = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(ScreenNames.MainAppNavigator);
    }, 1000);
  }, []);

  const onPressGoMain = () => {
    props.navigation.navigate(ScreenNames.MainAppNavigator);
  };
  return <LoadingScreenComponent onPressGoMainScreen={onPressGoMain} />;
};

export default LoadingScreenContainer;
