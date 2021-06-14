import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const ImageContainer = styled.SafeAreaView`
  margin-top: 175px;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: white;
  padding: 10px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const LoginHeader = () => (
  <ImageContainer>
    <Avatar.Image
      style={{ backgroundColor: 'orange' }}
      size={70}
      source={require('../../assets/login-icon.png')}
    />
  </ImageContainer>
);
