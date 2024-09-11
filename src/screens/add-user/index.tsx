import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import InputFiled from './components/inputFiled';

const AddUser = () => {
  return (
    <View style={styles.container}>
      <Header title={'Add Member'} showLeftIcon={true} />
      <InputFiled />
    </View>
  );
};

export default AddUser;
