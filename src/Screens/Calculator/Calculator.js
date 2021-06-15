import React, { useState } from 'react';

import { Result } from './Result';
import { CalculatorHeader } from './CalculatorHeader';
import { FirstRow } from './FirstRow';
import { SecondRow } from './SecondRow';
import { ThirdRow } from './ThirdRow';
import { FourthRow } from './FourthRow';
import { FifthRow } from './FifthRow';

import {
  MainContainer,
  BackgroundBlue,
  WhiteCircle,
  CalculatorContainer,
} from './CalculatorStyles';

const Calculator = ({ navigation }) => {
  const [data, setData] = useState({
    a: '',
    sign: '',
    b: '',
    result: 'z',
  });

  const result = value => {
    if (!isNaN(data.result)) {
      setData({ a: value, sign: '', b: '', result: 'z' });
      return;
    }
    if (isNaN(value) && value === '.' && data.sign === '') {
      setData({
        ...data,
        a: `${data.a}${value}`,
      });
      return;
    } else if (isNaN(value) && value === '.' && data.sign !== '') {
      setData({
        ...data,
        b: `${data.b}${value}`,
      });
      return;
    }
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
      value = parseFloat(data.a) + parseFloat(data.b);
    } else if (signOperation === '-') {
      value = parseFloat(data.a) - parseFloat(data.b);
    } else if (signOperation === 'X') {
      value = parseFloat(data.a) * parseFloat(data.b);
    } else if (signOperation === '/') {
      value = parseFloat(data.a) / parseFloat(data.b);
    }
    setData({
      ...data,
      result: value % 1 != 0 ? value.toFixed(2) : value,
    });
  };

  const clearAll = () => {
    setData({
      a: '',
      sign: '',
      b: '',
      result: 'z',
    });
  };

  const calculatePercents = () => {
    setData({
      ...data,
      result:
        (parseFloat(data.a) * parseFloat(data.b / 100)) % 1 !== 0
          ? (parseFloat(data.a) * parseFloat(data.b / 100)).toFixed(2)
          : parseFloat(data.a) * parseFloat(data.b / 100),
    });
  };

  const clear = () => {};

  return (
    <MainContainer>
      <CalculatorHeader navigation={navigation} />
      <BackgroundBlue>
        <WhiteCircle />
        <Result data={data} />
      </BackgroundBlue>
      <>
        <CalculatorContainer>
          <FirstRow
            result={result}
            clearAll={clearAll}
            data={data}
            calculatePercents={calculatePercents}
            clear={clear}
          />
          <SecondRow result={result} data={data} />
          <ThirdRow result={result} data={data} />
          <FourthRow result={result} data={data} />
          <FifthRow
            result={result}
            finalResult={finalResult}
            calculatePercents={calculatePercents}
          />
        </CalculatorContainer>
      </>
    </MainContainer>
  );
};

export default Calculator;
