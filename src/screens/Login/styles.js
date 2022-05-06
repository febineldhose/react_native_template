import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../Utils';
const styles = StyleSheet.create({
  _main: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  _welcome_back_txt: {
    color: colors.Coffe_Color,
    fontSize: fonts.XXL_26,
    fontWeight: '500',
  },
  _forgot_txt: {
    color: colors.Coffe_Color,
    fontSize: fonts.M_14,
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  _btn_main: {
    borderRadius: 25,
    width: '100%',
    backgroundColor: colors.Coffe_Color,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    marginTop: '35%',
    alignSelf: 'center',
  },
  _btn_text: {color: colors.White},
  _dontHave_txt: {
    color: colors.Gray,
    fontSize: fonts.M_14,
    alignSelf: 'center',
    marginTop: 12,
  },
  _register_txt: {
    color: colors.Coffe_Color,
    fontSize: fonts.M_14,
    alignSelf: 'flex-end',
  },
});
export default styles;
