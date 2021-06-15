import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const CalculatorHeaderContainer = styled(View)`
  flex: 0.3;
  background-color: #f4f4f4;
  z-index: 9999;
`;

const CalculatorInnerHeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  margin-left: 25px;
`;

const TextContainer = styled(View)`
  align-self: center;
`;

const TextTitle = styled(Text)`
  color: #009821;
  font-weight: bold;
  font-size: 16;
`;

export {
  CalculatorHeaderContainer,
  CalculatorInnerHeaderContainer,
  TextContainer,
  TextTitle,
};
