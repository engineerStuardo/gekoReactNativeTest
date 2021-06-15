import React from 'react';

import ButtonCalculator from './ButtonCalculator';
import { RowContainer } from './RowStyles';

export const FifthRow = ({ result, finalResult, calculatePercents }) => {
  return (
    <RowContainer>
      <ButtonCalculator
        color={'#009821'}
        width={50}
        height={50}
        textAlign={'center'}
        fontSize={32}
        update={calculatePercents}
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
        update={result}
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
    </RowContainer>
  );
};
