import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR.SECONDARY,
    paddingHorizontal: theme.SIZE.LARGE,
    paddingVertical: theme.SIZE.MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: theme.SIZE.EXTRA_LARGE,
    maxWidth: 280,
    borderRadius: theme.SIZE.SMALL,
  },
  courseTitle: {
    fontSize: theme.SIZE.MEDIUM,
    fontWeight: '600',
    color: theme.COLOR.LIGHT,
  },
  courseInfoContainer: {
    rowGap: theme.SIZE.SMALL,
    width: '75%',
  },
  courseInfoSubContainer: {
    flexDirection: 'row',
    columnGap: 5,
  },
  courseTotalDuration: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    fontWeight: '500',
    lineHeight: 14,
    color: theme.COLOR.LIGHT_GRAY,
  },
  progressContainer: {
    borderWidth: 2,
    borderColor: theme.COLOR.PRIMARY,
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: theme.COLOR.LIGHT_GRAY,
  },
});

export default styles;
