/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * @author Litet Li Perrin
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

enableScreens();

import colors from './src/theme';
import HomeNavigation from './src/navigations/HomeNavigation';
import todosReducer from './src/store/reducers/todo';

const rootReducer = combineReducers({todos: todosReducer});
const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    changeNavigationBarColor('#ffffff', true);
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar
              backgroundColor={colors.white}
              barStyle="dark-content"
              networkActivityIndicatorVisible
            />
            <HomeNavigation />
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
});

export default App;
