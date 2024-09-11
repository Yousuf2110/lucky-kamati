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

      <View
        style={{width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <Button
            onPress={console.log('object')}
            disabled={console.log('object')}
            loading={console.log('object')}
          />
        </View>
        <View style={{width: '50%'}}>
          <Button
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
