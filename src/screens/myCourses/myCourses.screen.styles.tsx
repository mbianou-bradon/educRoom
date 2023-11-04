import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.COLOR.LIGHT_DARK,
    paddingHorizontal: theme.SIZE.SMALL,
  },
  headerContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: theme.SIZE.EXTRA_LARGE,
    fontWeight: '700',
    color: theme.COLOR.LIGHT_GRAY,
  },
  searchHeaderContainer: {
    width: '80%',
    height: 50,
    paddingLeft: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    backgroundColor: theme.COLOR.LIGHT_GRAY,
    opacity: 0.8,
    borderRadius: theme.SIZE.SMALL,
  },
  searchText: {
    fontSize: theme.SIZE.SMALL,
    fontWeight: '400',
    color: theme.COLOR.LIGHT_DARK,
    width: '160%',
  },
  searchTextPlaceholderTextColor: {
    color: theme.COLOR.LIGHT_DARK,
  },
  section: {
    width: '100%',
    marginTop: theme.SIZE.LARGE,
    gap: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
