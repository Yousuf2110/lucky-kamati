import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(8),
    backgroundColor: THEME.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    width: '80%',
    height: hp(8),
    backgroundColor: THEME.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconColumn: {
    width: '10%',
    height: hp(8),
    backgroundColor: THEME.PRIMARY,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: RFPercentage(3),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
});
