import React from 'react';
import { View, Text } from 'react-native';

import ButtonCalculator from './ButtonCalculator';

export const FirstRow = ({ result, clearAll, data }) => {
  return (
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
        update={clearAll}
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
        update={result}
        color={'#009821'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
        data={data}
      >
        /
      </ButtonCalculator>
    </View>
  );
};
