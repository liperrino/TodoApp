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
import {useSelector} from 'react-redux';

import TodoList from '../../components/TodoList';

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const favors = useSelector((state) => state.todos.favors);
  let checked = todos.filter((todo) => {
    if (todo.isChecked) return todo;
  });

  const __isFavorite = (item) => {
    return favors.some((todo) => {
      return todo.key === item.key;
    });
  };

  checked = checked.filter((todo) => {
    if (!__isFavorite(todo)) return todo;
  });

  const data = [...favors, ...checked];

  return (
    <View style={{backgroundColor: '#fff'}}>
      <TodoList todos={data} favors={favors} text={'Favorite & Checked'} />
    </View>
  );
};

export default Todos;
