import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
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
    data.result !== -99
  ) {
    multiplicationFunction(data);
  }
  if (
    children === '/' &&
    data.sign === '/' &&
    data.b !== '' &&
    data.result !== -99
  ) {
    divisionFunction(data);
  }
  if (
    children === '-' &&
    data.sign === '-' &&
    data.b !== '' &&
    data.result !== -99
  ) {
    subtractionFunction(data);
  }
  if (
    children === '+' &&
    data.sign === '+' &&
    data.b !== '' &&
    data.result !== -99
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
