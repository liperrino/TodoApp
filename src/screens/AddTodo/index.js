import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {addTodo} from '../../store/actions/todo';

import DateTime from '../../components/DateTime';
import colors from '../../theme';
import styles from './styles';

const AddTodo = () => {
  const [name, onChangeName] = useState('');
  const [place, onChangePlace] = useState('');
  const [created, setCreated] = useState(new Date());
  const [started, setStarted] = useState(new Date());
  const [ended, setEnded] = useState(new Date());
  const [todo, setTodo] = useState({});

  const dispatch = useDispatch();

  const toogleAdd = (todo) => {
    dispatch(addTodo(todo.name, todo.place, todo.day, todo.start, todo.end));
    onChangeName('');
    onChangePlace('');
    setCreated(new Date());
    setStarted(new Date());
    setEnded(new Date());
  };

  useEffect(() => {
    const _created = moment(created).format('ddd . MMM Do YYYY . h:mm:ss a');
    const _started = moment(started).format('ddd . MMM Do YYYY . h:mm:ss a');
    const _ended = moment(ended).format('ddd . MMM Do YYYY . h:mm:ss a');
    setTodo({
      name,
      place,
      day: _created,
      start: _started,
      end: _ended,
    });
  }, [place, name, created, ended, started]);

  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.text}>Post Todo Request</Text>
      </View>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.surrounder}>
        <View style={styles.boxWrapper}>
          <View style={styles.box}>
            <View style={styles.boxHeader}>
              <View
                style={[
                  styles.input,
                  {borderBottomColor: colors.lightGrey, borderBottomWidth: 0.8},
                ]}>
                <MaterialCommunityIcons
                  name="account-circle"
                  color={colors.grey}
                  size={30}
                />
                <TextInput
                  style={styles.name}
                  placeholder={'Enter Todo Name Here'}
                  onChangeText={(text) => onChangeName(text)}
                  value={name}
                />
              </View>
              <View style={styles.input}>
                <MaterialCommunityIcons
                  name="google-maps"
                  color={colors.grey}
                  size={30}
                />
                <TextInput
                  style={styles.name}
                  placeholder={'Enter The Place ...'}
                  onChangeText={(text) => onChangePlace(text)}
                  value={place}
                />
              </View>
            </View>
            <View style={styles.timeZone}>
              <DateTime
                label={'CREATED TIME'}
                date={created}
                setDate={setCreated}
              />
              <DateTime
                label={'STARTING TIME'}
                date={started}
                setDate={setStarted}
              />
              <DateTime label={'ENDING TIME'} date={ended} setDate={setEnded} />
            </View>
            <TouchableOpacity
              style={styles.addWrapper}
              onPress={() => place.length && name.length && toogleAdd(todo)}>
              <MaterialCommunityIcons
                name="plus"
                color={colors.white}
                size={24}
                styles={styles.icon}
              />
              <Text style={styles.add}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddTodo;
