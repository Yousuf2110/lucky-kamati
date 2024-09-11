import React from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {THEME} from '../../constants/theme';
import SearchBar from './components/search-bar';
import Card from './components/card';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AddButton from './components/add-button';

const Home = () => {
  const navigation: any = useNavigation();

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
        data={[{}]}
        renderItem={() => <Card />}
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
