import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {deleteTodo, checkTodo, favoriteTodo} from '../../store/actions/todo';
import styles from './styles';
import Todo from '../Todo';

const TodoList = ({todos, favors, text = ''}) => {
  const dispatch = useDispatch();

  const toogleFavorite = (id) => {
    dispatch(favoriteTodo(id));
  };

  const toogleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  const toogleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const renderItem = ({item}) => {
    const isFavorite = favors.some((todo) => {
      return todo.key === item.key;
    });

    return (
      <Todo
        key={item.key}
        id={item.key}
        name={item.name}
        place={item.place}
        day={item.day}
        start={item.start}
        end={item.end}
        isChecked={item.isChecked}
        isFavorite={isFavorite}
        onToggleFavorite={() => toogleFavorite(item.key)}
        onToggleCheck={() => toogleCheck(item.key)}
        onToggleDelete={() => toogleDelete(item.key)}
      />
    );
  };

  return (
    <View
      style={
        text.length > 0
          ? styles.list
          : {
              height: '78.6%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              textAlign: 'center',
            }
      }>
      {text.length > 0 ? <Text style={styles.text}>{text}</Text> : <></>}
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          keyExtractor={(item, index) => item.key}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.todos}
        />
      ) : (
        <Text style={styles.noItems}>No Favorite nor Checked Todo item</Text>
      )}
    </View>
  );
};

export default TodoList;
