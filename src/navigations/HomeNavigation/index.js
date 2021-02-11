import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../../screens/Search';
import Todos from '../../screens/Todos';
import EditTodo from '../../screens/EditTodo';
import HomeStackScreen from '../HomeStackScreen';
import colors from '../../theme';

const HomeStack = createStackNavigator();

function HomeNavigation() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 1, // remove shadow on Android
          shadowOpacity: 1, // remove shadow on iOS
          borderBottomWidth: 0.5,
        },
        headerTintColor: colors.primary,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Edit"
        component={EditTodo}
        options={{
          tabBarVisible: false,
        }}
      />
      <HomeStack.Screen name="Todos" component={Todos} options={{}} />
      <HomeStack.Screen name="Search" component={Search} options={{}} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigation;
