import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../theme';
import styles from './styles';

const CityWrapper = ({place, isChecked}) => {
  return (
    <View style={styles.cityWrapper}>
      <View style={styles.cityLeft}>
        <MaterialCommunityIcons
          name="google-maps"
          size={16}
          color={colors.tertiary}
        />
        <Text style={styles.city}>{place}</Text>
      </View>
      <Text style={isChecked ? styles.done : styles.ongoing}>
        {isChecked ? 'done' : 'on going...'}
      </Text>
    </View>
  );
};

export default CityWrapper;
