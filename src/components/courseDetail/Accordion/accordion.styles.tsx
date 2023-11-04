import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.COLOR.DARK,
    borderRadius: 5,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  headingText: {
    fontSize: theme.SIZE.LARGE,
    fontWeight: '700',
    color: theme.COLOR.LIGHT,
  },
  numberOfLessonsText: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    fontWeight: '500',
    lineHeight: 14,
    color: theme.COLOR.LIGHT_GRAY,
  },
  contentDetailContainer: {
    paddingHorizontal: theme.SIZE.MEDIUM,
  },
  contentDetailText: {
    color: theme.COLOR.LIGHT_GRAY,
    fontSize: theme.SIZE.SMALL,
  },
});

export default styles;
