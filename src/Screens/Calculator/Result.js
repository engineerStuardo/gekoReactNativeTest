import React from 'react';
import { Text } from 'react-native';

export const Result = ({ data }) => {
  return (
    <>
      <Text style={{ fontSize: 50, color: 'white', marginTop: 160 }}>
        {data.a}
      </Text>
      <Text style={{ fontSize: 50, color: 'white', marginTop: 160 }}>
        {' '}
        {data.sign}{' '}
      </Text>
      <Text style={{ fontSize: 50, color: 'white', marginTop: 160 }}>
        {data.b === '0' ? null : data.b}
      </Text>
      <Text style={{ fontSize: 50, color: 'white', marginTop: 160 }}>
        {' '}
        {data.result !== -99 ? '=' : null}{' '}
      </Text>
      <Text style={{ fontSize: 50, color: 'white', marginTop: 160 }}>
        {' '}
        {data.result !== -99 ? data.result : null}{' '}
      </Text>
    </>
  );
};
