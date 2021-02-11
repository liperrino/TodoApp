import {StyleSheet, Text, View} from 'react-native';

import colors from '../../theme';

const styles = StyleSheet.create({
  appBar: {
    width: '90%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  appWrapper: {
    flexDirection: 'row',
  },
  heading: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
