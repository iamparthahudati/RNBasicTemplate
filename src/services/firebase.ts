import { getApps } from '@react-native-firebase/app';

export const isFirebaseReady = (): boolean => {
  return getApps().length > 0;
};
