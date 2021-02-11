import React, {useState} from 'react';
import {View, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import colors from '../../theme';
import styles from './styles';

const DateTime = ({date, setDate, label = ''}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker} style={styles.labels}>
        <MaterialCommunityIcons
          name="clock"
          color={colors.grey}
          size={18}
          style={styles.icon}
        />
        <Text style={styles.time}>{label}</Text>
      </TouchableOpacity>
      <Text style={styles.date}>
        {moment(date).format('ddd . MMM Do YYYY . h:mm:ss a')}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTime;
