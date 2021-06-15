import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import ButtonCalculator from './ButtonCalculator';
import { RowContainer } from './RowStyles';

export const FourthRow = ({ result, data }) => {
  return (
    <RowContainer>
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
        data={data}
      >
        +
      </ButtonCalculator>
    </RowContainer>
  );
};
