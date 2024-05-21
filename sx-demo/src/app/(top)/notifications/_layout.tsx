import {  Stack } from 'expo-router';

export default function NotificationsLayout() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="index" options={{ title: '通知一覧', headerLeft: () => <></>}} />
    </Stack>
  );
};