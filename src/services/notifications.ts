import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

/**
 * Request notification permission
 */
export const requestNotificationPermission = async (): Promise<boolean> => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  return enabled;
};

/**
 * Get FCM token
 */
export const getFcmToken = async (): Promise<string | null> => {
  try {
    const token = await messaging().getToken();
    return token;
  } catch {
    return null;
  }
};

/**
 * Foreground message handler
 */
export const listenForegroundNotifications = () => {
  return messaging().onMessage(
    async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      Alert.alert(
        remoteMessage.notification?.title ?? 'Notification',
        remoteMessage.notification?.body ?? '',
      );
    },
  );
};
