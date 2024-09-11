import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../../../constants/screen';

const Card = () => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(SCREEN.TRANSACTIONS_DETAILS)}
      style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Name:
            <Text style={styles.text}> Qazi Muhaamad Yousuf</Text>
          </Text>
          <Text style={styles.title}>
            Phone #<Text style={styles.text}> 03042483426</Text>
          </Text>
          <Text style={styles.title}>
            PRs:
            <Text style={styles.text}> 2000</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.button}>
          <AntDesign name={'delete'} size={15} color={THEME.RED} />
        </View>
        <View style={styles.button}>
          <AntDesign name={'edit'} size={15} color={THEME.BLUE} />
        </View>
        <View style={styles.button}>
          <AntDesign name={'sharealt'} size={15} color={THEME.GREEN} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
