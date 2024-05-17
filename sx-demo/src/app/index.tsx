import { View, Text } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { Link, Redirect } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

const index = () => {
  const {auth} = useAuth();
  return (
    !auth ? <Redirect href={'(auth)/'} /> : <Redirect href={'(top)/'} />
  );
};

export default index;