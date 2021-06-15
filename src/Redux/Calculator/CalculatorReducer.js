import { CalculatorActionTypes } from './CalculatorTypes';

export const calculatorItems = (state = [], action) => {
  switch (action.type) {
    case CalculatorActionTypes.ADDITION:
      return [
        ...state,
        `Addition ${action.payload.a} + ${action.payload.b} = ${action.payload.result}`,
      ];
    case CalculatorActionTypes.SUBTRACTION:
      return [
        ...state,
        `Subtraction ${action.payload.a} - ${action.payload.b} = ${action.payload.result}`,
      ];
    case CalculatorActionTypes.MULTIPLICATION:
      return [
        ...state,
        `Multiplication ${action.payload.a} * ${action.payload.b} = ${action.payload.result}`,
      ];
    case CalculatorActionTypes.DIVISION:
      return [
        ...state,
        `Division ${action.payload.a} / ${action.payload.b} = ${action.payload.result}`,
      ];
  }
  return state;
};
