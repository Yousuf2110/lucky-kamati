import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList, ScrollView, Linking} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';
import Header from '../../components/header';
import Button from '../../components/button';

const TransactionDetails = () => {
  const route: any = useRoute();
  const [transactions, setTransactions] = useState([]);
  const scrollViewRef: any = useRef();
  const memberId = route?.params?.data?.id;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const savedTransactions = await AsyncStorage.getItem('transactions');
        let parsedTransactions = savedTransactions
          ? JSON.parse(savedTransactions)
          : [];

        parsedTransactions = parsedTransactions.filter(
          (transaction: any) => transaction.memberId === memberId,
        );

        parsedTransactions = parsedTransactions.map((transaction: any) => ({
          ...transaction,
          date: transaction.date || new Date().toLocaleDateString(),
        }));
        setTransactions(parsedTransactions);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };

    fetchTransactions();
  }, [memberId]);

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

  const getAllTextContent = () => {
    const name = route?.params?.data?.name || '';
    const phone = route?.params?.data?.phone || '';
    const payment = route?.params?.data?.payment || '';

    let transactionsText = transactions
      .map(
        (transaction: any) => `${transaction.date}: ${transaction.amount} rs`,
      )
      .join('\n');

    return `Name: ${name}\nPhone: ${phone}\nTotal Payment: ${payment} rs\n\nTransactions:\n${transactionsText}`;
  };

  const sendMessageOnWhatsApp = async () => {
    const phone = route?.params?.data?.phone;
    const message = getAllTextContent();
    const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(
      message,
    )}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Transactions Details'} showLeftIcon={true} />
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{paddingBottom: 20}}>
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
      </ScrollView>
      <View style={styles.row}>
        <Button title={'Share as Text'} onPress={sendMessageOnWhatsApp} />
      </View>
    </View>
  );
};

export default TransactionDetails;
