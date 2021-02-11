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

import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

const Home = () => {
  const todos = useSelector((state) => state.todos.todos);
  const favors = useSelector((state) => state.todos.favors);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Header />
      <TodoList todos={todos} favors={favors} />
    </View>
  );
};

export default Home;
