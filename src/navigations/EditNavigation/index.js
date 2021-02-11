import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../theme';
import EditTodo from '../../screens/EditTodo';

const EditStack = createStackNavigator();

function EditNavigation({navigation, route}) {
  return (
    <EditStack.Navigator
      screenOptions={{
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
      <EditStack.Screen
        name="Edit"
        component={EditTodo}
        options={{}}
        navigation={navigation}
        route={route}
      />
    </EditStack.Navigator>
  );
}

export default EditNavigation;
