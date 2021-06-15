import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import {
  MainContainer,
  HeaderContainer,
  InnerHeaderContainer,
  TitleContainer,
  Title,
  CalculatorButton,
  Count,
  Description,
} from './HistoricalStyles';

const Historical = ({ navigation, calculatorItems }) => {
  console.log(calculatorItems);

  return (
    <MainContainer>
      <HeaderContainer>
        <InnerHeaderContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar.Icon
              color={'black'}
              style={{ backgroundColor: '#f4f4f4', marginRight: 30 }}
              size={60}
              icon='arrow-left-drop-circle-outline'
            />
          </TouchableOpacity>
          <Image source={require('../../../assets/logoGeko.png')} />
        </InnerHeaderContainer>
      </HeaderContainer>
      <TitleContainer>
        <Title>Report</Title>
        <CalculatorButton
          labelStyle={{ fontSize: 35 }}
          icon='calculator'
          mode='contained'
          onPress={() => navigation.navigate('Calculator')}
        >
          <Text style={{ fontSize: 13 }}>Calculator</Text>
        </CalculatorButton>
      </TitleContainer>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <ScrollView>
          <View style={{ flex: 1, margin: 35, flexDirection: 'column' }}>
            {calculatorItems.length > 0
              ? calculatorItems.map((item, index) => (
                  <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Count>{index + 1}</Count>
                    <Description>{item}</Description>
                  </View>
                ))
              : null}
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
};

const mapStateToProps = ({ calculatorItems }) => ({
  calculatorItems,
});

export default connect(mapStateToProps, null)(Historical);
