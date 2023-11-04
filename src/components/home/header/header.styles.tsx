import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.COLOR.LIGHT_DARK,
    height: 80,
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
  },
  welcomeText: {
    fontSize: theme.SIZE.SMALL,
    fontWeight: '600',
    color: theme.COLOR.LIGHT_GRAY,
  },
  useName: {
    color: theme.COLOR.LIGHT,
    fontSize: theme.SIZE.EXTRA_LARGE,
  },
});

export default styles;
