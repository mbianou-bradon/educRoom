import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
  },
  menuItemText: {
    fontSize: theme.SIZE.LARGE,
    color: theme.COLOR.LIGHT_GRAY,
  },
});

export default styles;
