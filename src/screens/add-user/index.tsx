import React, {useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import InputFiled from './components/inputFiled';
import Button from './components/button';
import DatePickerInput from './components/date-picker-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../constants/screen';

const AddUser = () => {
  const navigation: any = useNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSaveUser = async () => {
    if (!name || !phone || !payment || !selectedDate) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
      return;
    }

    if (phone.length !== 11 || !/^\d+$/.test(phone)) {
      ToastAndroid.show(
        'Phone number must be exactly 11 digits',
        ToastAndroid.SHORT,
      );
      return;
    }

    const userData = {
      name,
      phone,
      payment,
      selectedDate,
    };

    try {
      const storedData = await AsyncStorage.getItem('members');
      let members = storedData ? JSON.parse(storedData) : [];
      members.push(userData);
      await AsyncStorage.setItem('members', JSON.stringify(members));

      ToastAndroid.show('User data saved successfully!', ToastAndroid.SHORT);
      navigation.navigate(SCREEN.HOME);

      setName('');
      setPhone('');
      setPayment('');
      setSelectedDate('');
    } catch (error) {
      ToastAndroid.show('Failed to save user data', ToastAndroid.SHORT);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Add Member'} showLeftIcon={true} />
      <InputFiled
        placeholder={'Name'}
        value={name}
        onChangeText={setName}
        keyboardType={'default'}
      />
      <InputFiled
        placeholder={'Phone Number'}
        value={phone}
        onChangeText={setPhone}
        keyboardType={'decimal-pad'}
        maxLength={11}
      />
      <InputFiled
        placeholder={'Payment Paid'}
        value={payment}
        onChangeText={setPayment}
        keyboardType={'decimal-pad'}
      />
      <DatePickerInput
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Button title="Save" onPress={handleSaveUser} />
    </View>
  );
};

export default AddUser;
