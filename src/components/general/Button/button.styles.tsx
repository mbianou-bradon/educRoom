import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  callToActionInnerContainer: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  enrollContainer: {
    backgroundColor: theme.COLOR.LIGHT_DARK,
    borderWidth: 1,
    borderColor: theme.COLOR.DARK,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.SIZE.EXTRA_SMALL,
  },
  enrollText: {fontSize: theme.SIZE.LARGE, color: theme.COLOR.LIGHT_GRAY},
});

export default styles;
