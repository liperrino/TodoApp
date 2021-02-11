import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  icons: {
    marginHorizontal: 5,
  },
  postWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.tertiary,
    marginTop: 10,
  },
});
export default styles;
