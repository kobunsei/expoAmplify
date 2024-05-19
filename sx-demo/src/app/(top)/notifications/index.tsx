import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {notifications} from '@assets/dummy/data'
import ItemOfNotifications from '@/components/ItemOfNotifications'

export default function ReportsScreen() {
  return (
    <FlatList
      data={notifications}
      renderItem={({ item }) => <ItemOfNotifications message={item}></ItemOfNotifications>}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    ></FlatList>
  );
}