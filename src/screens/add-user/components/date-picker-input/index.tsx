import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {styles} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {THEME} from '../../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DatePickerInput = ({selectedDate, setSelectedDate}: any) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate =
        tempDate.getDate() +
        '-' +
        (tempDate.getMonth() + 1) +
        '-' +
        tempDate.getFullYear();
      setSelectedDate(fDate);
    } else {
      setShow(false);
    }
  };

  return (
    <View style={styles.textInputView}>
      <TouchableOpacity
        onPress={() => setShow(!show)}
        style={styles.textInputView}>
        <Text
          style={[
            styles.input,
            {
              color: selectedDate ? THEME.BLACK : THEME.GRAY,
            },
          ]}>
          {selectedDate ? selectedDate : 'Select Date'}
        </Text>
        <AntDesign
          name={'calendar'}
          size={20}
          color={selectedDate ? THEME.BLACK : THEME.GRAY}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePickerInput;
