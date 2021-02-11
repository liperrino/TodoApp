import React from 'react';

import {View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Todos from '../../screens/Todos';
import Notifications from '../../screens/Notifications';
import Chat from '../../screens/Chat';
import AddTodo from '../../screens/AddTodo';
import Home from '../../screens/Home';

import HomeIcon from '../../assets/images/home.svg';
import HomeoIcon from '../../assets/images/homeo.svg';
import MessageIcon from '../../assets/images/message.svg';
import LikeIcon from '../../assets/images/like.svg';
import UnLikeIcon from '../../assets/images/unlike.svg';

import colors from '../../theme';
import styles from './styles';

const Tab = createBottomTabNavigator();

function HomeStackScreen({navigation, route}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({})}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.darkGrey,
        style: {
          backgroundColor: colors.white,
        },
        labelStyle: {
          fontSize: 8,
          color: '#222',
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <HomeoIcon width={size} height={size} fill={color} />
            ) : (
              <HomeIcon width={size} height={size} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <LikeIcon fill={color} width={size} height={size} />
            ) : (
              <UnLikeIcon fill={color} width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="AddTodo"
        component={AddTodo}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => (
            <View style={focused ? styles.postWrapper : {}}>
              <MaterialCommunityIcons
                name="plus"
                color={focused ? colors.white : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Fontisto name="bell-alt" color={color} size={size} />
            ) : (
              <Fontisto name="bell" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused, color, size}) => (
            <MessageIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeStackScreen;
