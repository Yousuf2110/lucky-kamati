import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, Alert} from 'react-native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputFiled from '../../../add-user/components/inputFiled';
import Button from '../../../../components/button';

const AddAmountModal = ({visible, onRequestClose, onSave, id}: any) => {
  const [payment, setPayment] = useState('');

  const handleSave = async () => {
    if (payment) {
      const transaction = {
        id: new Date().getTime().toString(),
        amount: parseFloat(payment),
        date: new Date().toLocaleDateString(),
        memberId: id,
      };

      try {
        const existingTransactions = await AsyncStorage.getItem('transactions');
        const transactions = existingTransactions
          ? JSON.parse(existingTransactions)
          : [];
        transactions.push(transaction);

        await AsyncStorage.setItem(
          'transactions',
          JSON.stringify(transactions),
        );

        onSave(parseFloat(payment));
        setPayment('');
        onRequestClose();
      } catch (error) {
        Alert.alert('Error', 'Failed to save the payment');
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Add Amount</Text>
          <InputFiled
            placeholder={'Payment Paid'}
            value={payment}
            onChangeText={setPayment}
            keyboardType={'decimal-pad'}
          />
          <View style={styles.buttonContainer}>
            <View style={{bottom: 30, width: '50%'}}>
              <Button title="Save" onPress={handleSave} />
            </View>
            <View style={{bottom: 30, width: '50%'}}>
              <Button title="Cancel" onPress={onRequestClose} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddAmountModal;
