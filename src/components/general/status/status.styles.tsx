import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  statusContainer: {
    height: 25,
    paddingHorizontal: theme.SIZE.MEDIUM,
    backgroundColor: theme.COLOR.PRIMARY,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.SIZE.EXTRA_SMALL,
  },
  statusText: {
    fontSize: theme.SIZE.SMALL,
    color: theme.COLOR.LIGHT,
  },
});

export default styles;
