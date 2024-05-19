import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { NotificationMessage } from '@/types';
import { useSegments } from 'expo-router';
import dayjs from 'dayjs';

type ItemOfNotificationsProps = {
  message: NotificationMessage;
};

const ItemOfNotifications = ({ message }: ItemOfNotificationsProps) => {
  const segments = useSegments();

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{dayjs(message.time).format('YYYY-MM-DD HH:mm:ss')}</Text>
      <Text style={styles.title}>{message.title}</Text>
      <Text style={styles.body} adjustsFontSizeToFit >{message.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    color: 'gray',
  },
  body: {
    fontWeight: '500',
  },
});

export default ItemOfNotifications;