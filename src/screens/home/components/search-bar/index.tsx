import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';

const SearchBar = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.iconColumn}>
        <AntDesign name={'search1'} size={15} color={THEME.GRAY} />
      </View>
      <View style={styles.textInputColumn}>
        <TextInput
          placeholder="Search"
          value={text}
          onChangeText={e => setText(e)}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default SearchBar;
