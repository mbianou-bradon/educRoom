import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.COLOR.LIGHT_DARK,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: theme.COLOR.PRIMARY,
    elevation: 3,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: theme.COLOR.PRIMARY,
  },
  userName: {
    fontSize: theme.SIZE.EXTRA_LARGE,
    color: theme.COLOR.LIGHT_GRAY,
  },
  menuItemsContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  logoutContainer: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
  },
  logout: {
    fontSize: theme.SIZE.LARGE,
    color: 'red',
  },
});

export default styles;
