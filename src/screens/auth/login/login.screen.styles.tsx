import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

export const styles = StyleSheet.create({
  loginContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    backgroundColor: theme.COLOR.LIGHT_DARK,
  },
  majorContainer: {
    paddingHorizontal: 10,
  },
  loginOptionsContainer: {
    marginTop: 50,
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginDescription: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
    width: '85%',
  },
  loginOptions: {
    flexDirection: 'row',
    gap: 19,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
    borderWidth: 1,
    borderColor: theme.COLOR.LIGHT_GRAY,
    borderRadius: 10,
    marginVertical: 15,
  },
  loginOptionsText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#B6B4B4',
  },
  fastLoginOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.COLOR.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: 'transparent',
  },
  placeholderTextColor: {
    color: theme.COLOR.LIGHT_GRAY,
  },
});
