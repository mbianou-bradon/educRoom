import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    width: 170,
    borderWidth: 1,
    padding: 10,
    borderRadius: theme.SIZE.SMALL,
  },
  coverImageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: theme.COLOR.SECONDARY,
    borderRadius: theme.SIZE.SMALL,
  },
  courseTitle: {
    fontSize: theme.SIZE.MEDIUM,
    fontWeight: '600',
    color: theme.COLOR.LIGHT,
  },
  courseInfoContainer: {
    rowGap: theme.SIZE.SMALL,
    width: '80%',
    marginVertical: theme.SIZE.SMALL,
  },
  courseTotalDuration: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    fontWeight: '500',
    lineHeight: 14,
    color: theme.COLOR.LIGHT_GRAY,
  },
});

export default styles;
