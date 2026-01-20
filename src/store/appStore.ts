import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppState {
  isLoading: boolean;
  hasOnboarded: boolean;

  setLoading: (value: boolean) => void;
  setOnboarded: (value: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      isLoading: false,
      hasOnboarded: false,

      setLoading: value => set({ isLoading: value }),
      setOnboarded: value => set({ hasOnboarded: value }),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
