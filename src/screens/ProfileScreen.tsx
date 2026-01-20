import { API_BASE_URL } from '@env';
import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import api from '../api/axios';

export default function ProfileScreen() {
  useEffect(() => {
    Alert.alert('Env Check', `API_BASE_URL = ${API_BASE_URL}`);

    api
      .get('/')
      .then(() => {
        Alert.alert('Axios Check', '✅ Axios wired correctly');
      })
      .catch(() => {
        Alert.alert('Axios Check', '⚠️ Axios wired (API unreachable is OK)');
      });
  }, []);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
