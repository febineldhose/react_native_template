import {StyleSheet} from 'react-native';
import {colors} from '../../Utils';
const styles = StyleSheet.create({
  _main: {flex: 1, backgroundColor: colors.White},
  _list_container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingTop: 25,
  },
  _empty_list_container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _seperator: {height: 12},
});
export default styles;
