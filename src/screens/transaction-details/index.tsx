import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import InputFiled from './components/inputFiled';
import Button from './components/button';
import Card from '../home/components/card';

const TransactionDetails = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Header title={'Transactions Details'} showLeftIcon={true} />
      <Card />
      <Button
        onPress={console.log('object')}
        disabled={console.log('object')}
        loading={console.log('object')}
      />
    </View>
  );
};

export default TransactionDetails;
