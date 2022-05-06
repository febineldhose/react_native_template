import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../Utils';
const styles = StyleSheet.create({
  _main: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  _image: {height: 150, width: 150, borderRadius: 8},
  _top_view_wrapper: {flexDirection: 'row', alignItems: 'center'},
  _top_view_subwrapper: {alignItems: 'center', paddingHorizontal: 10},
  _drinkname: {fontWeight: 'bold', fontSize: fonts.L_15},
  _categoryname: {fontSize: fonts.M_12, opacity: 0.6},
  _ingredients_wrapper: {flexDirection: 'row'},
  _ingredients_subwrapper: {marginLeft: 20},
  _ingredients_head: {
    fontWeight: 'bold',
    fontSize: fonts.M_13,
    marginTop: 15,
    marginBottom: 10,
    color: colors.Coffe_Color,
  },
  _ingredients_txt: {
    fontSize: fonts.M_13,
    color: colors.Black,
    opacity: 0.6,
  },
  _instructions: {
    fontSize: fonts.M_13,
    opacity: 0.6,
    color: colors.Black,
    textAlign: 'justify',
  },
});
export default styles;
