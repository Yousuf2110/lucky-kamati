import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../../../constants/theme';

const InputFiled = ({placeholder, value, onChangeText}: any) => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={e => onChangeText(e)}
        placeholderTextColor={THEME.GRAY}
        style={styles.input}
      />
    </View>
  );
};

export default InputFiled;
