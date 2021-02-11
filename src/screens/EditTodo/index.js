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
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {editTodo} from '../../store/actions/todo';

import DateTime from '../../components/DateTime';
import colors from '../../theme';
import styles from './styles';

const EditTodo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const normalize = (date) => {
    date = date.split('.').join('');
    const exts = ['st', 'nd', 'rd', 'th'];
    exts.forEach((ext) => {
      date = date.replace(ext, '');
    });
    return new Date(Date.parse(date));
  };

  const {key, _name, _place, _day, _start, _end, isChecked} = route.params;
  const [name, onChangeName] = useState(_name);
  const [place, onChangePlace] = useState(_place);
  const [created, setCreated] = useState(normalize(_day));
  const [started, setStarted] = useState(normalize(_start));
  const [ended, setEnded] = useState(normalize(_end));
  const [todo, setTodo] = useState({
    key,
    name,
    place,
    day: moment(created).format('ddd . MMM Do YYYY . h:mm:ss a'),
    start: moment(started).format('ddd . MMM Do YYYY . h:mm:ss a'),
    end: moment(ended).format('ddd . MMM Do YYYY . h:mm:ss a'),
    isChecked,
  });

  const dispatch = useDispatch();

  const toogleEdit = (todo) => {
    dispatch(
      editTodo(todo.key, todo.name, todo.place, todo.day, todo.start, todo.end),
    );
    onChangeName('');
    onChangePlace('');
    setCreated(new Date());
    setStarted(new Date());
    setEnded(new Date());
    navigation.navigate('Home');
  };

  useEffect(() => {
    const _created = moment(created).format('ddd . MMM Do YYYY . h:mm:ss a');
    const _started = moment(started).format('ddd . MMM Do YYYY . h:mm:ss a');
    const _ended = moment(ended).format('ddd . MMM Do YYYY . h:mm:ss a');
    setTodo({
      key,
      name,
      place,
      day: _created,
      start: _started,
      end: _ended,
      isChecked,
    });
  }, [place, name, created, ended, started]);

  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.text}>Edit Todo Request</Text>
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
              onPress={() => place.length && name.length && toogleEdit(todo)}>
              <MaterialCommunityIcons
                name="check"
                color={colors.white}
                size={24}
                styles={styles.icon}
              />
              <Text style={styles.add}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditTodo;
