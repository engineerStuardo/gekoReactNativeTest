import styled from 'styled-components/native';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const LoginContainer = styled(View)`
  flex: 0.8;
  background-color: #0073b1;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled(View)`
  width: 330px;
  height: 500px;
  background-color: white;
  align-items: center;
  padding: 60px;
`;

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

export { LoginContainer, BoxContainer, UserInput, PasswordInput, LoginButton };
