import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../../../constants/screen';

const AddButton = () => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(SCREEN.ADD_USER)}
      style={styles.container}>
      <AntDesign name={'plus'} size={25} color={THEME.WHITE} />
    </TouchableOpacity>
  );
};

export default AddButton;
