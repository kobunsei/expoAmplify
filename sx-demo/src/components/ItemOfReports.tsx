import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Report } from '@/types';
import { Link, useSegments } from 'expo-router';

type ItemOfReportsProps = {
  report: Report;
};

const ItemOfReports = ({ report }: ItemOfReportsProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/reports/${report.workingDate}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>{report.workingDate}</Text>
          <Text style={styles.time}>{report.reportStatus}</Text>
        </View>

        <Text style={styles.status}>{report.modificationReason}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    color: 'gray',
  },
  status: {
    fontWeight: '500',
  },
});

export default ItemOfReports;