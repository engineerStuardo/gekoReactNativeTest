import React from 'react';
import { View, Text } from 'react-native';

import ButtonCalculator from './ButtonCalculator';

export const FifthRow = ({ result, finalResult }) => {
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
        color={'#009821'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
      >
        %
      </ButtonCalculator>
      <ButtonCalculator
        update={result}
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
        update={finalResult}
        backgroundColor={'#009821'}
        color={'white'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
        borderRadius={50}
      >
        =
      </ButtonCalculator>
    </View>
  );
};
