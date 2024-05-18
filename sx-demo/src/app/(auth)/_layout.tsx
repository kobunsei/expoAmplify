import {  Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="index" options={{ title: 'サインイン', headerLeft: () => <></>}} />
    </Stack>
  );
};