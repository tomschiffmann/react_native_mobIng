import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../components/screens/welcome_screen';
import ShoppingListScreen from '../components/screens/shopping_list_screen';

const Tab = createBottomTabNavigator();

function MainAppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({color, size}) => (
        //     <Icon name="home" color={color} size={size} />
        //   ),
        // }}
        name={'Welcome Screen'}
        component={WelcomeScreen}
      />
      <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
    </Tab.Navigator>
  );
}

export default MainAppNavigator;
