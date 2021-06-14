import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './src/Navigators/Main';
import { SafeArea } from './src/Utility/safeAreaComponent';

export default function App() {
  return (
    <NavigationContainer>
      <SafeArea>
        <Main />
        <StatusBar style='auto' />
      </SafeArea>
    </NavigationContainer>
  );
}
