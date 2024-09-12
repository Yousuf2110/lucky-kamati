import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {THEME} from '../../constants/theme';
import {styles} from './styles';

const Button = ({onPress, disabled, loading, title}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {backgroundColor: disabled ? THEME.GRAY : THEME.PRIMARY},
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={THEME.WHITE} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
