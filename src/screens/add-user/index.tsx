import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import InputFiled from './components/inputFiled';
import Button from './components/button';
import DatePickerInput from './components/date-picker-input';

const AddUser = () => {
  const [name, setName] = useState('');
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
        value={name}
        onChangeText={setName}
        keyboardType={'decimal-pad'}
      />
      <InputFiled
        placeholder={'Payment Paid'}
        value={name}
        onChangeText={setName}
        keyboardType={'decimal-pad'}
      />
      <DatePickerInput />
      <Button />
    </View>
  );
};

export default AddUser;
