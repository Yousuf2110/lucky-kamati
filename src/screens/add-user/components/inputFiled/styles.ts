import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {THEME} from '../../../../constants/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    color: THEME.WHITE,
    fontFamily: 'Poppins-Regular',
    top: hp(0.3),
    width: '100%',
  },
});
