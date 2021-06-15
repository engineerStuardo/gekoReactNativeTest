import React from 'react';

import ButtonCalculator from './ButtonCalculator';
import { RowContainer } from './RowStyles';

export const FirstRow = ({ result, clearAll, data }) => {
  return (
    <RowContainer style={{ paddingTop: 35 }}>
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
    </RowContainer>
  );
};
