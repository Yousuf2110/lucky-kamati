import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import AddAmountModal from '../add-amount-modal';
import {THEME} from '../../../../constants/theme';
import {SCREEN} from '../../../../constants/screen';

const Card = ({data, onDelete, onUpdatePayment}: any) => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };

  const handleSavePayment = (amount: number) => {
    const updatedPayment = parseFloat(data.payment) + amount;
    onUpdatePayment(data.id, updatedPayment);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate(SCREEN.TRANSACTIONS_DETAILS, {
          data,
        })
      }
      style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Name: <Text style={styles.text}>{data?.name}</Text>
          </Text>
          <Text style={styles.title}>
            Phone #: <Text style={styles.text}>{data?.phone}</Text>
          </Text>
          <Text style={styles.title}>
            PRs: <Text style={styles.text}>{data?.payment}</Text>
          </Text>
          <Text style={styles.title}>
            Date: <Text style={styles.text}>{data?.selectedDate}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          onPress={onRequestClose}
          activeOpacity={0.8}
          style={[styles.button, {width: '65%'}]}>
          <Text style={styles.title}>Add Amount</Text>
          <AntDesign
            name={'pluscircle'}
            size={15}
            color={THEME.PRIMARY}
            style={{bottom: 1, left: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onDelete}>
          <AntDesign name={'delete'} size={15} color={THEME.RED} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREEN.ADD_USER, {
              data,
              type: false,
            })
          }
          activeOpacity={0.8}
          style={styles.button}>
          <AntDesign name={'edit'} size={15} color={THEME.LIGHT_BLUE} />
        </TouchableOpacity>
      </View>
      <AddAmountModal
        id={data?.id}
        visible={modalVisible}
        onRequestClose={onRequestClose}
        onSave={handleSavePayment}
      />
    </TouchableOpacity>
  );
};

export default Card;
