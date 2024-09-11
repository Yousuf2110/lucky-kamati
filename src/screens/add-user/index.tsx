import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import InputFiled from './components/inputFiled';
import Button from './components/button';
import DatePickerInput from './components/date-picker-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREEN} from '../../constants/screen';

const AddUser = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();

  console.log('params', route?.params?.data);

  useEffect(() => {
    setName(route?.params?.data?.name);
    setPhone(route?.params?.data?.phone);
    setPayment(route?.params?.data?.payment);
    setSelectedDate(route?.params?.data?.selectedDate);
  }, [route?.params?.data]);

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
      id: route?.params?.data?.id || new Date().getTime(), // Use existing ID or generate new one
      name,
      phone,
      payment,
      selectedDate,
    };

    try {
      const storedData = await AsyncStorage.getItem('members');
      let members = storedData ? JSON.parse(storedData) : [];

      if (route?.params?.data?.id) {
        members = members.map((member: any) =>
          member.id === userData.id ? userData : member,
        );
      } else {
        members.push(userData);
      }

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
