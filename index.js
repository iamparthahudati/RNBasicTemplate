/**
 * @format
 */

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // Base: do nothing
  // App-level logic will be added later
});

AppRegistry.registerComponent(appName, () => App);
