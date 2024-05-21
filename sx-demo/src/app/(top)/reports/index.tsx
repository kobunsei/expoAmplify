import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {reports} from '@assets/dummy/data'
import ItemOfReports from '@/components/ItemOfReports'

export default function ReportsScreen() {
  return (
    <FlatList
      data={reports}
      renderItem={({ item }) => <ItemOfReports report={item}></ItemOfReports>}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    ></FlatList>
  );
}