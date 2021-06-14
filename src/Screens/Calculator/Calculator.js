import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

import { ButtonCalculator } from './ButtonCalculator';

const Calculator = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 0.3, backgroundColor: '#f4f4f4' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            marginLeft: 25,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar.Icon
              color={'black'}
              style={{ backgroundColor: '#f4f4f4', marginRight: 60 }}
              size={60}
              icon='arrow-left-drop-circle-outline'
            />
          </TouchableOpacity>
          <Image source={require('../../../assets/logoGeko.png')} />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: '#009821' }}>Calculator</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.3,
          backgroundColor: '#0073b1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>8</Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}> + </Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>5</Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}> = </Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>13</Text>
      </View>
      <>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#f4f4f4',
              justifyContent: 'space-between',
              paddingTop: 35,
              paddingLeft: 45,
              paddingRight: 45,
            }}
          >
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              C
            </ButtonCalculator>
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={15}
              borderWidth={1}
              paddingTop={11}
              borderColor={'#009821'}
            >
              Clear
            </ButtonCalculator>
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              %
            </ButtonCalculator>
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              /
            </ButtonCalculator>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#f4f4f4',
              justifyContent: 'space-between',
              paddingLeft: 45,
              paddingRight: 45,
            }}
          >
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              7
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              8
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              9
            </ButtonCalculator>
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              X
            </ButtonCalculator>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#f4f4f4',
              justifyContent: 'space-between',
              paddingLeft: 45,
              paddingRight: 45,
            }}
          >
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              4
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              5
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              6
            </ButtonCalculator>
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              -
            </ButtonCalculator>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#f4f4f4',
              justifyContent: 'space-between',
              paddingLeft: 45,
              paddingRight: 45,
            }}
          >
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              1
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              2
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              3
            </ButtonCalculator>
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              +
            </ButtonCalculator>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#f4f4f4',
              justifyContent: 'space-between',
              paddingLeft: 45,
              paddingRight: 45,
            }}
          >
            <ButtonCalculator
              color={'#009821'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              %
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              0
            </ButtonCalculator>
            <ButtonCalculator
              color={'gray'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              .
            </ButtonCalculator>

            <ButtonCalculator
              backgroundColor={'#009821'}
              color={'white'}
              width={50}
              height={50}
              textAlign={'center'}
              fontSize={32}
            >
              =
            </ButtonCalculator>
          </View>
        </View>
      </>
    </View>
  );
};

export default Calculator;
