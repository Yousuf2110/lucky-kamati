import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '88%',
    height: hp(6.6),
    backgroundColor: '#eee',
    alignItems: 'center',
    marginVertical: hp(2),
    borderRadius: hp(1),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
  },
  textInputColumn: {
    width: '90%',
    justifyContent: 'center',
  },
  iconColumn: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.6),
  },
  input: {
    fontSize: RFPercentage(2),
    color: THEME.WHITE,
    fontFamily: 'Poppins-Regular',
    top: hp(0.3),
    width: '100%',
  },
});
