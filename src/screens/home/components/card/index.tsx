import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../../../constants/screen';

const Card = ({data}: any) => {
  console.log('data', data);
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate(SCREEN.TRANSACTIONS_DETAILS)}
      style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Name:
            <Text style={styles.text}> {data?.name}</Text>
          </Text>
          <Text style={styles.title}>
            Phone #<Text style={styles.text}> {data?.phone}</Text>
          </Text>
          <Text style={styles.title}>
            PRs:
            <Text style={styles.text}> {data?.payment}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <AntDesign name={'delete'} size={15} color={THEME.RED} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <AntDesign name={'edit'} size={15} color={THEME.BLUE} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <AntDesign name={'sharealt'} size={15} color={THEME.GREEN} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
