import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login/Login';
import Historical from '../Screens/Historical/Historical';
import Calculator from '../Screens/Calculator/Calculator';

const Stack = createStackNavigator();

export const Main = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Historical' component={Historical} />
      <Stack.Screen name='Calculator' component={Calculator} />
    </Stack.Navigator>
  );
};
