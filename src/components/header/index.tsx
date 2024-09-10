import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = ({showLeftIcon, title}: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconColumn}>
        {showLeftIcon && <Text style={styles.title}>{'<-'}</Text>}
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{width: '10%'}} />
    </View>
  );
};

export default Header;
