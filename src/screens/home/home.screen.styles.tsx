import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR.LIGHT_DARK,
    height: '100%',
  },
  section: {
    paddingBottom: theme.SIZE.MEDIUM,
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
  },
  ongoingCourseContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: theme.SIZE.LARGE,
  },
  ContinueLearningText: {
    fontSize: theme.SIZE.EXTRA_LARGE,
    fontWeight: '500',
    color: theme.COLOR.LIGHT_GRAY,
  },
  ongoingCourseList: {
    flexDirection: 'row',
    gap: 10,
  },
  seeAllText: {
    color: theme.COLOR.PRIMARY,
    opacity: 0.9,
    fontSize: theme.SIZE.MEDIUM,
  },
});

export default styles;
