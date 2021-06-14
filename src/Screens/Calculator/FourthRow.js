import React from 'react';
import { View, Text } from 'react-native';

import { ButtonCalculator } from './ButtonCalculator';

export const FourthRow = ({ result }) => {
  return (
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
        update={result}
        color={'gray'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
      >
        1
      </ButtonCalculator>
      <ButtonCalculator
        update={result}
        color={'gray'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
      >
        2
      </ButtonCalculator>
      <ButtonCalculator
        update={result}
        color={'gray'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
      >
        3
      </ButtonCalculator>
      <ButtonCalculator
        update={result}
        color={'#009821'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
      >
        +
      </ButtonCalculator>
    </View>
  );
};
