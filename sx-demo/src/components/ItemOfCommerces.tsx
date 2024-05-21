import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Commerce } from '@/types';

type ItemOfCommercesProps = {
  item: Commerce;
};

const ItemOfCommerces = ({ item }: ItemOfCommercesProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.commerceName}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.commerceValue}>日報：{item.commerceValueOfReport}</Text>
          <Text style={styles.commerceValue}>訂正：{item.commerceValueOfModification}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  commerceValue: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    width: '50%',
  },
});

export default ItemOfCommerces;