import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

import { LoginHeader } from '../../Shared/loginHeader';

const LoginContainer = styled(View)``;

const UserInput = styled(TextInput)`
  width: 210px;
  margin-top: 60px;
  background-color: white;
  border-width: 1px;
  border-color: gray;
  height: 50px;
`;

const PasswordInput = styled(TextInput)`
  width: 210px;
  margin-top: 20px;
  background-color: white;
  border-width: 1px;
  border-color: gray;
  height: 50px;
`;

const LoginButton = styled(Button)`
  margin-top: 40px;
  width: 100%;
  background-color: #009821;
`;

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <LoginHeader />
      <View
        style={{
          width: 330,
          height: 500,
          backgroundColor: 'white',
          alignItems: 'center',
          padding: 60,
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: '#0073b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
