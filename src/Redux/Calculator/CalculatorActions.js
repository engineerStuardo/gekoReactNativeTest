import { CalculatorActionTypes } from './CalculatorTypes';

export const addition = payload => ({
  type: CalculatorActionTypes.ADDITION,
  payload,
});

export const subtraction = payload => ({
  type: CalculatorActionTypes.SUBTRACTION,
  payload,
});

export const multiplication = payload => ({
  type: CalculatorActionTypes.MULTIPLICATION,
  payload,
});

export const division = payload => ({
  type: CalculatorActionTypes.DIVISION,
  payload,
});
