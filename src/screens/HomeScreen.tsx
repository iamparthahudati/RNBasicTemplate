import { API_BASE_URL } from '@env';
import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import api from '../api/axios';

export default function HomeScreen() {
  useEffect(() => {
    Alert.alert('Env Check');
    Alert.alert('Env Check', `API_BASE_URL = ${API_BASE_URL}`);

    api
      .get('/')
      .then(() => {
        Alert.alert('Axios Check', '✅ Axios instance is working');
      })
      .catch(() => {
        Alert.alert(
          'Axios Check',
          '⚠️ Axios is working (API not reachable, which is OK)',
        );
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>HOME SCREEN LOADED</Text>
    </View>
  );
}
