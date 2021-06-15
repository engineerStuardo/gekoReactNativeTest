import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

import { LoginHeader } from '../../Shared/loginHeader';
import {
  LoginContainer,
  BoxContainer,
  UserInput,
  PasswordInput,
  LoginButton,
} from './LoginStyles';

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <LoginContainer>
        <LoginHeader />
        <BoxContainer
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
          }}
        >
          <Image source={require('../../../assets/logoGeko.png')} />
          <UserInput
            label='User'
            value={user}
            textContentType='username'
            keyboardType='default'
            autoCapitalize='none'
            onChangeText={value => setUser(value)}
            theme={{ colors: { primary: '#0073b1' } }}
            left={
              <TextInput.Icon
                style={{ marginTop: 5 }}
                name='account'
                color={'gray'}
              />
            }
          />
          <PasswordInput
            label='Password'
            value={password}
            textContentType='password'
            keyboardType='default'
            autoCapitalize='none'
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
            theme={{ colors: { primary: '#0073b1' } }}
            left={
              <TextInput.Icon
                style={{ marginTop: 5 }}
                name='lock'
                color={'gray'}
              />
            }
          />

          <LoginButton
            mode='contained'
            onPress={() => navigation.navigate('Historical')}
          >
            Login
          </LoginButton>
        </BoxContainer>
      </LoginContainer>
    </ScrollView>
  );
};

export default Login;
