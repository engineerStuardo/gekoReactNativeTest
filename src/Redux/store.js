import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { calculatorItems } from './Calculator/CalculatorReducer';

const reducers = combineReducers({
  calculatorItems,
});

export const store = createStore(reducers, applyMiddleware(thunk));
