import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';

import colors from '../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGrey,
  },
  image: {
    height: 120,
    width: width,
    backgroundColor: colors.white,
  },
});

export default styles;
