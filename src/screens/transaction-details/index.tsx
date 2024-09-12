import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import InputFiled from './components/inputFiled';
import Card from '../home/components/card';
import {useRoute} from '@react-navigation/native';
import Button from '../../components/button';

const TransactionDetails = () => {
  const route: any = useRoute();

  const [name, setName] = useState('');

  const transactions = [
    {id: '1', amount: '1200', date: '12-12-2002'},
    {id: '2', amount: '500', date: '10-10-2020'},
    {id: '3', amount: '800', date: '05-05-2021'},
    {id: '1', amount: '1200', date: '12-12-2002'},
    {id: '2', amount: '500', date: '10-10-2020'},
    {id: '3', amount: '800', date: '05-05-2021'},
    {id: '1', amount: '1200', date: '12-12-2002'},
    {id: '2', amount: '500', date: '10-10-2020'},
    {id: '3', amount: '800', date: '05-05-2021'},
    {id: '1', amount: '1200', date: '12-12-2002'},
    {id: '2', amount: '500', date: '10-10-2020'},
    {id: '3', amount: '800', date: '05-05-2021'},
    {id: '1', amount: '1200', date: '12-12-2002'},
    {id: '2', amount: '500', date: '10-10-2020'},
    {id: '3', amount: '800', date: '05-05-2021'},
  ];

  const renderTransaction = ({item}: any) => (
    <View
      style={[
        styles.textContainer,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      ]}>
      <Text style={styles.text}>{item.amount}</Text>
      <Text style={styles.text}>{item.date}</Text>
    </View>
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
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />

      <View style={styles.row}>
        <View style={{width: '50%'}}>
          <Button
            title={'Share as Image'}
            onPress={console.log('object')}
            disabled={console.log('object')}
            loading={console.log('object')}
          />
        </View>
        <View style={{width: '50%'}}>
          <Button
            title={'Share as Text'}
            onPress={console.log('object')}
            disabled={console.log('object')}
            loading={console.log('object')}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetails;
