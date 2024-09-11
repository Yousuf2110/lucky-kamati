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
      <View style={styles.textContainer}>
        <Text style={styles.text}>Qazi Muhaamad Yousuf</Text>
        <Text style={styles.text}>0304-2483426</Text>
        <Text style={styles.title}>
          Total:
          <Text style={styles.text}>
            {' '}
            2000
            <Text style={styles.title}>rs</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.row}>
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
