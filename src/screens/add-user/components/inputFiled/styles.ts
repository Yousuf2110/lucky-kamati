import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  textInputView: {
    width: '90%',
    backgroundColor: '#eee',
    alignSelf: 'center',
    borderRadius: hp(1),
    marginVertical: hp(2),
  },
  input: {
    fontSize: RFPercentage(2),
    color: THEME.BLACK,
    fontFamily: 'Poppins-Regular',
    top: hp(0.3),
    width: '100%',
    paddingHorizontal: wp(3),
  },
});
