import React, {useState} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {Text} from 'react-native';
import {styles} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {THEME} from '../../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DatePickerInput = ({}: any) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

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
      <TouchableHighlight
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
        {/* <View>
          <AntDesign
            name={'calendar'}
            size={20}
            color={selectedDate ? THEME.BLACK : THEME.GRAY}
          />
        </View> */}
      </TouchableHighlight>

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
