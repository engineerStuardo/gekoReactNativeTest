import React from 'react';

import { TextInfo } from './ResultStyles';

export const Result = ({ data }) => {
  return (
    <>
      <TextInfo>{data.a}</TextInfo>
      <TextInfo> {data.sign} </TextInfo>
      <TextInfo>{data.b === '0' ? null : data.b}</TextInfo>
      <TextInfo> {data.result !== 'z' ? '=' : null} </TextInfo>
      <TextInfo> {data.result !== 'z' ? data.result : null} </TextInfo>
    </>
  );
};
