import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';
import Header from '../../components/header';
import Button from '../../components/button';

const TransactionDetails = () => {
  const route: any = useRoute();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const savedTransactions = await AsyncStorage.getItem('transactions');
        let parsedTransactions = savedTransactions
          ? JSON.parse(savedTransactions)
          : [];
        parsedTransactions = parsedTransactions.map((transaction: any) => ({
          ...transaction,
          date: transaction.date || new Date().toLocaleDateString(),
        }));
        setTransactions(parsedTransactions);
        await AsyncStorage.setItem(
          'transactions',
          JSON.stringify(parsedTransactions),
        );
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const renderTransaction = ({item}: any) => (
    <>
      <View
        style={[
          styles.textContainer,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={styles.text}>{item.amount} rs</Text>
        <Text style={styles.text}>{item.date}</Text>
      </View>
      <View style={styles.line} />
    </>
  );

  return (
    <View style={styles.container}>
      <Header title={'Transactions Details'} showLeftIcon={true} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{route?.params?.data?.name}</Text>
        <Text style={styles.text}>{route?.params?.data?.phone}</Text>
        <Text style={styles.title}>
          Total:
          <Text style={styles.text}>
            {' '}
            {route?.params?.data?.payment}
            <Text style={styles.title}>rs</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.line} />
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.row}>
        <View style={{width: '50%'}}>
          <Button
            title={'Share as Image'}
            onPress={() => console.log('1')}
            disabled={false}
            loading={false}
          />
        </View>
        <View style={{width: '50%'}}>
          <Button
            title={'Share as Text'}
            onPress={() => console.log('4')}
            disabled={false}
            loading={false}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetails;
