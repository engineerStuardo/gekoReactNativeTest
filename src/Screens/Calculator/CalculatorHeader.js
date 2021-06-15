import React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity, Image } from 'react-native';

import {
  CalculatorHeaderContainer,
  CalculatorInnerHeaderContainer,
  TextContainer,
  TextTitle,
} from './CalculatorHeaderStyles';

export const CalculatorHeader = ({ navigation }) => {
  return (
    <CalculatorHeaderContainer>
      <CalculatorInnerHeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Avatar.Icon
            color={'black'}
            style={{ backgroundColor: '#f4f4f4', marginRight: 30 }}
            size={60}
            icon='arrow-left-drop-circle-outline'
          />
        </TouchableOpacity>
        <Image source={require('../../../assets/logoGeko.png')} />
      </CalculatorInnerHeaderContainer>
      <TextContainer>
        <TextTitle>Calculator</TextTitle>
      </TextContainer>
    </CalculatorHeaderContainer>
  );
};
