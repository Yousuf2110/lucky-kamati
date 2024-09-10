import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';

const AddButton = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <AntDesign name={'plus'} size={25} color={THEME.WHITE} />
    </View>
  );
};

export default AddButton;
