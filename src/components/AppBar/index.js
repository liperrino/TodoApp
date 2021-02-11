import React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

import styles from './styles';
import colors from '../../theme';
import TodoIcon from '../../assets/images/todo.svg';
const avatar = require('../../assets/images/avatar.jpg');

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appWrapper}>
        <TodoIcon width={28} height={28} fill={colors.black} />
        <Text style={styles.heading}>Todos</Text>
      </View>
      <Avatar rounded source={avatar} />
    </View>
  );
}
