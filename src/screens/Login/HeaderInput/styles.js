import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../Utils';
import {Platform} from 'react-native';
const styles = StyleSheet.create({
  _main: {backgroundColor: colors.White, overflow: 'hidden', marginTop: 5},
  _headertxt: {
    color: colors.Gray,
  },
  inputStyle: {
    borderBottomColor: Platform.select({
      android: 'rgba(0,0,0,0.8)',
      ios: 'rgba(0,0,0,0.2)',
    }),
    borderBottomWidth: 0.5,
    width: '100%',
  },
  _focused_inputStyle: {
    borderBottomColor: colors.Coffe_Color,
    borderBottomWidth: 1,
  },
  _error_text: {color: colors.Red, fontSize: fonts.M_12},
});
export default styles;
