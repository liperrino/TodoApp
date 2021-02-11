import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../theme';
import styles from './styles';

const SearchBar = () => {
  const [value, onChangeText] = useState('Look for a todo');
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="magnify"
        size={24}
        color={colors.darkGrey}
      />
      <TextInput
        style={styles.text}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <MaterialCommunityIcons name="tune" size={24} color={colors.darkGrey} />
    </View>
  );
};

export default SearchBar;
