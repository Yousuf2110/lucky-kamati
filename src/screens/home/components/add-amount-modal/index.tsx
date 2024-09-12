import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';
import InputFiled from '../../../add-user/components/inputFiled';
import Button from '../../../../components/button';

const AddAmountModal = ({visible, onRequestClose, onSave}: any) => {
  const [payment, setPayment] = useState('');

  const handleSave = () => {
    if (payment) {
      onSave(parseFloat(payment)); // Send payment to parent component as a number
      setPayment(''); // Reset the input after saving
      onRequestClose(); // Close the modal
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
          <View style={{top: 10, width: '100%'}}>
            <Text style={styles.title}>Add Amount</Text>
            <InputFiled
              placeholder={'Payment Paid'}
              value={payment}
              onChangeText={setPayment}
              keyboardType={'decimal-pad'}
            />
          </View>
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
