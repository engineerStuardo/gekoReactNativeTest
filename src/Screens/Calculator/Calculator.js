import React, { useState } from 'react';
import { View } from 'react-native';

import { Result } from './Result';
import { CalculatorHeader } from './CalculatorHeader';
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
      <CalculatorHeader navigation={navigation} />
      <View
        style={{
          flex: 0.3,
          backgroundColor: '#0073b1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Result data={data} />
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
