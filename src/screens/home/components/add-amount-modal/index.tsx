import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../../../constants/screen';
import Button from '../../../../components/button';
import InputFiled from '../../../add-user/components/inputFiled';

const AddAmountModal = ({visible, onRequestClose}: any) => {
  const navigation: any = useNavigation();
  const [payment, setPayment] = useState('');

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
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
            }}>
            <View style={{bottom: 30, width: '50%'}}>
              <Button title="Save" onPress={'handleSaveUser'} />
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
