import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {THEME} from '../../constants/theme';
import SearchBar from './components/search-bar';
import Card from './components/card';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AddButton from './components/add-button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [members, setMembers] = useState([]);
  const navigation = useNavigation();

  console.log('members', members.length);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const storedData = await AsyncStorage.getItem('members');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const sortedData = parsedData.sort((a: any, b: any) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
          setMembers(sortedData);
        }
      } catch (error) {
        console.log('Failed to load data', error);
      }
    };

    fetchMembers();

    // Add an event listener for when data is updated
    const onUpdate = () => fetchMembers();
    const unsubscribe = navigation.addListener('focus', onUpdate);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>No members found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME.PRIMARY} />
      <Header title={'Members List'} />
      <SearchBar />
      <FlatList
        data={members}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(20)}}
        ListEmptyComponent={renderEmptyComponent}
      />
      <View style={styles.footer}>
        <AddButton />
      </View>
    </View>
  );
};

export default Home;
