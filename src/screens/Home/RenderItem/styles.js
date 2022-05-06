import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../Utils';
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 13,
    backgroundColor: colors.White,
    elevation: 4,
    shadowColor: colors.Gray,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 8,
  },
  _image: {height: 100, width: 100, borderRadius: 8},
  _second_sec_wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 4,
  },
  _drinkname: {fontWeight: 'bold', fontSize: fonts.M_14},
  _categoryname: {fontSize: fonts.M_12, opacity: 0.6},
  _instructions: {fontSize: fonts.M_12, marginTop: 8, opacity: 0.6},
});
export default styles;
