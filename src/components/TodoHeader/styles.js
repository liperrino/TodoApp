import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  todoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 8,
  },
  avatar: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: 35,
    height: 35,
    fontSize: 12,
    borderRadius: 17.5,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.balck,
  },
  day: {
    color: colors.darkGrey,
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoInner: {
    marginHorizontal: 8,
    alignContent: 'center',
  },
  icon: {
    paddingHorizontal: 3,
    paddingTop: 20,
  },
});

export default styles;
