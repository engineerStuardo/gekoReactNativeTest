import { View } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;

const BackgroundBlue = styled(View)`
  flex: 0.9;
  background-color: #0073b1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const WhiteCircle = styled(View)`
  position: absolute;
  top: -600px;
  background-color: #f4f4f4;
  width: 700px;
  height: 700px;
  border-radius: 700px;
`;

const CalculatorContainer = styled(View)`
  flex: 1;
  flex-direction: column;
`;

export { MainContainer, BackgroundBlue, WhiteCircle, CalculatorContainer };
