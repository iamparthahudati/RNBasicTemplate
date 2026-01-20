/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { isFirebaseReady } from './src/services/firebase';
import {
  listenForegroundNotifications,
  requestNotificationPermission,
} from './src/services/notifications';
function App() {
  useEffect(() => {
    requestNotificationPermission();

    const unsubscribe = listenForegroundNotifications();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const ready = isFirebaseReady();

    Alert.alert(
      'Firebase Check',
      ready ? '✅ Firebase is READY' : '❌ Firebase is NOT ready',
    );
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
