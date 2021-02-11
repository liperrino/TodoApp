import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  cityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingBottom: 8,
  },
  cityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  done: {
    color: colors.secondary,
    fontSize: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ongoing: {
    color: colors.tertiary,
    fontSize: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  city: {
    color: '#333',
    fontSize: 11,
    marginVertical: 4,
    marginHorizontal: 4,
  },
});

export default styles;
