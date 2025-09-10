import { useFonts } from 'expo-font';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from '@expo-google-fonts/inter'
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { AuthProvider } from '../contexts/useAuth';
import { useAuth } from '../hooks/useAuth';

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
    )
}

function RootLayoutNav() {
  const {isAuth} = useAuth()
  return (

    <Stack screenOptions = {{headerShown:false}}>
      <Stack.Protected guard={isAuth}>
        <Stack.Screen name='(private)' />
      </Stack.Protected>
     
     <Stack.Protected guard={!isAuth}>
        <Stack.Screen name='(public)' />
      </Stack.Protected>
    
    </Stack>
  );
}
