import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import {
  division,
  multiplication,
  addition,
  subtraction,
} from '../../Redux/Calculator/CalculatorActions';

const ButtonCalculator = ({
  color,
  width,
  height,
  textAlign,
  fontSize,
  borderWidth = 0,
  paddingTop = 0,
  borderColor = '',
  backgroundColor = '',
  update,
  borderRadius = 0,
  data,
  children,
  divisionFunction,
  subtractionFunction,
  multiplicationFunction,
  additionFunction,
}) => {
  if (
    children === 'X' &&
    data.sign === 'X' &&
    data.b !== '' &&
    data.result !== 'z'
  ) {
    multiplicationFunction(data);
  }
  if (
    children === '/' &&
    data.sign === '/' &&
    data.b !== '' &&
    data.result !== 'z'
  ) {
    divisionFunction(data);
  }
  if (
    children === '-' &&
    data.sign === '-' &&
    data.b !== '' &&
    data.result !== 'z'
  ) {
    subtractionFunction(data);
  }
  if (
    children === '+' &&
    data.sign === '+' &&
    data.b !== '' &&
    data.result !== 'z'
  ) {
    additionFunction(data);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        update(children);
      }}
    >
      <Text
        style={{
          backgroundColor,
          color,
          width,
          height,
          textAlign,
          fontSize,
          borderWidth,
          paddingTop,
          borderColor,
          borderRadius,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => ({
  divisionFunction: value => dispatch(division(value)),
  multiplicationFunction: value => dispatch(multiplication(value)),
  additionFunction: value => dispatch(addition(value)),
  subtractionFunction: value => dispatch(subtraction(value)),
});

export default connect(null, mapDispatchToProps)(ButtonCalculator);
