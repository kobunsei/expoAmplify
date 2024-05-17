import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import reports from '@assets/dummy/data';
import ItemOfCommerces from '@/components/ItemOfCommerces';
import ItemOfReports from '@/components/ItemOfReports';

const ReportDetailScreen = () => {
  const { workingDate } = useLocalSearchParams();

  const report = reports.find((o) => o.workingDate === workingDate);

  if (!report) {
    return <Text>Report not found!</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `営業日付 ${report.workingDate}` }} />

      <ItemOfReports report={report} />

      <FlatList
        data={report.commerces}
        renderItem={({ item }) => <ItemOfCommerces item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});

export default ReportDetailScreen;