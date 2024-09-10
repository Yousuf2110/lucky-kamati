import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';

const Card = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Card;
