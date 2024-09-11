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
    height: hp(6.6),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: RFPercentage(2),
    fontFamily: 'Poppins-Regular',
    top: hp(0.2),
    width: '100%',
    paddingHorizontal: wp(3),
  },
});
