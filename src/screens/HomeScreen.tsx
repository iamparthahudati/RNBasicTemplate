import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAppStore, useThemeStore } from '../store';

export default function HomeScreen() {
  const { hasOnboarded, setOnboarded } = useAppStore();
  const { mode, setMode } = useThemeStore();

  return (
    <View>
      <Text>Onboarded: {String(hasOnboarded)}</Text>
      <Text>Theme: {mode}</Text>

      <Button
        title="Toggle Onboarded"
        onPress={() => setOnboarded(!hasOnboarded)}
      />
      <Button title="Light Theme" onPress={() => setMode('light')} />
      <Button title="Dark Theme" onPress={() => setMode('dark')} />
    </View>
  );
}
