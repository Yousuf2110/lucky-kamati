import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: hp(7),
    height: hp(7),
    backgroundColor: THEME.PRIMARY,
    borderRadius: 200 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
