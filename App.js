import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import { Main } from './src/Navigators/Main';
import { SafeArea } from './src/Utility/safeAreaComponent';
import { store } from './src/Redux/store';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeArea>
          <Main />
          <StatusBar style='auto' />
        </SafeArea>
      </Provider>
    </NavigationContainer>
  );
}
