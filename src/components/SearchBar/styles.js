import {StyleSheet} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0.1,
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  text: {
    height: 40,
    color: colors.darkGrey,
    width: '86%',
    paddingHorizontal: 8,
  },
});

export default styles;
