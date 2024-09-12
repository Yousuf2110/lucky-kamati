import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {THEME} from '../../../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '98%',
    paddingVertical: hp(1),
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    shadowColor: THEME.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    marginVertical: hp(2),
    borderRadius: hp(1),
  },
  box: {
    width: '98%',
    paddingVertical: hp(1),
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textContainer: {
    width: '90%',
    justifyContent: 'center',
  },
  iconColumn: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.6),
  },
  title: {
    fontSize: RFPercentage(2.4),
    color: THEME.BLACK,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: RFPercentage(2.4),
    color: THEME.BLACK,
    fontFamily: 'Poppins-Regular',
    top: hp(0.5),
  },
  buttonSection: {
    width: '90%',
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: '15%',
    height: hp(6),
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
    marginRight: wp(1),
  },
});
