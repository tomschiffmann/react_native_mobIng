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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import styles from './styles';

export interface Props {}
const WelcomeScreenComponent = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Willkommen zu der ultimativen Shopping Liste
        </Text>
      </View>
    </>
  );
};

export default WelcomeScreenComponent;
