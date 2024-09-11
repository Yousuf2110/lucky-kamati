import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
  },
  row: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: hp(2),
  },
  text: {
    fontSize: RFPercentage(3.4),
    color: THEME.BLACK,
    fontFamily: 'Poppins-Regular',
    top: hp(0.5),
  },
  title: {
    fontSize: RFPercentage(3.4),
    color: THEME.BLACK,
    fontFamily: 'Poppins-SemiBold',
  },
});
