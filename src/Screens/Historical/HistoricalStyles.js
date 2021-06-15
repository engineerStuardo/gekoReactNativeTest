import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;

const HeaderContainer = styled(View)`
  flex: 0.2;
  background-color: #f4f4f4;
`;

const InnerHeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  margin-left: 25px;
`;

const TitleContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 30px;
  padding: 35px;
  color: #0073b1;
  font-weight: bold;
`;

const CalculatorButton = styled(Button)`
  width: 175px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: #0073b1;
`;

const Count = styled(Text)`
  background-color: #009821;
  width: 65px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Description = styled(Text)`
  background-color: white;
  height: 65px;
  width: 80%;
  border-width: 2px;
  border-color: gray;
  text-align: center;
  padding-top: 20px;
  color: gray;
`;

const ListContainer = styled(View)`
  flex: 1;
  margin: 35px;
  flex-direction: column;
`;

export {
  MainContainer,
  HeaderContainer,
  InnerHeaderContainer,
  TitleContainer,
  Title,
  CalculatorButton,
  Count,
  Description,
  ListContainer,
};
