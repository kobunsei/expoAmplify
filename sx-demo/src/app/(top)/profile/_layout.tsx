import {  Stack } from 'expo-router';

export default function ReportsLayout() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="index" options={{ title: 'プロファイル', headerLeft: () => <></> }} />
    </Stack>
  );
};