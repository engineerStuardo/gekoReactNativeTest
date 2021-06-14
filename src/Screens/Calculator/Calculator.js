import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

import { FirstRow } from './FirstRow';
import { SecondRow } from './SecondRow';
import { ThirdRow } from './ThirdRow';
import { FourthRow } from './FourthRow';
import { FifthRow } from './FifthRow';

const Calculator = ({ navigation }) => {
  const [data, setData] = useState({
    a: '',
    sign: '',
    b: '',
    result: -99,
  });

  const result = value => {
    if (isNaN(value)) {
      setData({
        ...data,
        sign: value,
      });
      return;
    }
    if (data.sign === '') {
      setData({
        ...data,
        a: `${data.a}${value}`,
      });
    } else {
      setData({
        ...data,
        b: `${data.b}${value}`,
      });
    }
  };

  const finalResult = () => {
    let signOperation = data.sign;
    let value = 0;
    if (signOperation === '+') {
      value = parseInt(data.a) + parseInt(data.b);
    } else if (signOperation === '-') {
      value = parseInt(data.a) - parseInt(data.b);
    } else if (signOperation === 'X') {
      value = parseInt(data.a) * parseInt(data.b);
    } else if (signOperation === '/') {
      value = parseInt(data.a) / parseInt(data.b);
    }
    setData({
      ...data,
      result: value.toFixed(2),
    });
  };

  const clearAll = () => {
    setData({
      a: '',
      sign: '',
      b: '',
      result: -99,
    });
  };

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
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>
          {data.a}
        </Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>
          {' '}
          {data.sign}{' '}
        </Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>
          {data.b === '0' ? null : data.b}
        </Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>
          {' '}
          {data.result !== -99 ? '=' : null}{' '}
        </Text>
        <Text style={{ fontSize: 30, color: 'white', marginTop: 40 }}>
          {' '}
          {data.result !== -99 ? data.result : null}{' '}
        </Text>
      </View>
      <>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <FirstRow result={result} clearAll={clearAll} />
          <SecondRow result={result} />
          <ThirdRow result={result} />
          <FourthRow result={result} />
          <FifthRow result={result} finalResult={finalResult} />
        </View>
      </>
    </View>
  );
};

export default Calculator;
