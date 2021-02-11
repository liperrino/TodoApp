/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * @author Litet Li Perrin
 */

import React from 'react';
import {View} from 'react-native';

import AppBar from '../AppBar';
import SearchBar from '../SearchBar';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <AppBar />
        <SearchBar />
      </View>
    </View>
  );
};

export default Header;
