import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 8,
    paddingRight: 4,
  },
  time: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.darkGrey,
    justifyContent: 'flex-start',
  },
  date: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.darkGrey,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginRight: 8,
  },
});

export default styles;
