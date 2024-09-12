import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {styles} from './styles';
import Card from './components/card';
import {THEME} from '../../constants/theme';
import Header from '../../components/header';
import SearchBar from './components/search-bar';
import AddButton from './components/add-button';

const Home = () => {
  const navigation = useNavigation();
  const [members, setMembers] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const storedData = await AsyncStorage.getItem('members');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const sortedData = parsedData.sort((a: any, b: any) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            return nameA.localeCompare(nameB);
          });
          setMembers(sortedData);
        }
      } catch (error) {
        console.log('Failed to load data', error);
      }
    };

    fetchMembers();

    const onUpdate = () => fetchMembers();
    const unsubscribe = navigation.addListener('focus', onUpdate);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const handleDeleteMember = async (id: number) => {
    try {
      const storedData = await AsyncStorage.getItem('members');
      let members = storedData ? JSON.parse(storedData) : [];
      members = members.filter((member: any) => member.id !== id);
      await AsyncStorage.setItem('members', JSON.stringify(members));
      setMembers(members);
    } catch (error) {
      console.log('Failed to delete member', error);
    }
  };

  const handleUpdatePayment = async (id: number, updatedPayment: number) => {
    try {
      const updatedMembers: any = members.map((member: any) =>
        member.id === id
          ? {...member, payment: updatedPayment.toFixed(2)}
          : member,
      );
      await AsyncStorage.setItem('members', JSON.stringify(updatedMembers));
      setMembers(updatedMembers);
    } catch (error) {
      console.log('Failed to update payment', error);
    }
  };

  const filteredMembers = members.filter((member: any) =>
    member.name.toLowerCase().includes(text.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME.PRIMARY} />
      <Header title="Members List" />
      <SearchBar text={text} setText={setText} />
      <FlatList
        data={filteredMembers}
        renderItem={({item}: any) => (
          <Card
            data={item}
            onDelete={() => handleDeleteMember(item.id)}
            onUpdatePayment={handleUpdatePayment}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(20)}}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>No members found</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <AddButton />
      </View>
    </View>
  );
};

export default Home;
