import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    height: '97.6%',
  },
  text: {
    fontSize: 18,
    fontFamily: '700',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  todos: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4',
  },
  noItems: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkGrey,
    textAlign: 'center',
  },
});

export default styles;
