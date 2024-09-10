import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>AddUser</Text>
      <Button title="Press" onPress={() => navigation.navigate('AddUser')} />
    </View>
  );
};

export default Home;
