import React from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useRouter, useFocusEffect } from 'expo-router';

const index = () => {
  const {auth} = useAuth();
  const router = useRouter();

  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    !auth ? router.replace('(auth)/') : router.replace('(top)/');
  });

  return <></>
};

export default index;