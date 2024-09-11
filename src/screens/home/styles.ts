import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(7),
  },
  title: {
    fontSize: RFPercentage(2.4),
    color: THEME.GRAY,
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 0,
    bottom: hp(1),
    paddingHorizontal: wp(4),
    position: 'absolute',
  },
});
