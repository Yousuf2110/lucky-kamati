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
    marginBottom: 0,
    bottom: 0,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: hp(2),
  },
  line: {
    width: '95%',
    borderWidth: 1,
    borderColor: THEME.GRAY,
    opacity: 0.4,
    alignSelf: 'center',
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
