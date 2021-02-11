import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../theme';
import styles from './styles';

const TodoFooterr = ({start, end}) => {
  return (
    <View style={styles.todoFooter}>
      <View style={styles.start}>
        <Text style={styles.text}>{start}</Text>
        <Text style={styles.sub}>Start</Text>
      </View>
      <View style={styles.end}>
        <Text style={styles.text}>{end}</Text>
        <Text style={styles.sub}>End</Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="message-text-outline"
          size={16}
          color={colors.darkGrey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoFooterr;
