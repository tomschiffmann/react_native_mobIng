import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ScreenNames from './ScreenNames';
import LoadingScreen from '../components/screens/loading_screen';
import MainAppNavigator from './MainAppNavigatior';
import ShoppingListScreen from '../components/screens/shopping_list_screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.LoadingScreen}
          component={LoadingScreen}
        />
        <Stack.Screen
          name={ScreenNames.MainAppNavigator}
          component={MainAppNavigator}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
