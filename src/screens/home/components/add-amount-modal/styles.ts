import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(65, 65, 67, 0.77)',
  },
  modalView: {
    width: '100%',
    backgroundColor: THEME.WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: hp(22),
    alignItems: 'center',
    shadowColor: THEME.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: RFPercentage(2.4),
    color: THEME.BLACK,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
});
