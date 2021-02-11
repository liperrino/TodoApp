import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  todoFooter: {
    borderTopColor: '#e9e7e7',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 36,
  },
  start: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  end: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 8, fontWeight: '700', flexDirection: 'row'},
  sub: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.darkGrey,
  },
});

export default styles;
