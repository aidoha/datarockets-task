import React, { PropsWithChildren } from 'react';
import reducer, { State, Actions, initialState, ValidationErrorPayload } from './reducer';

type UpdateFunctionType = (value: string) => void;

interface CalculatorContextType {
	state: State;
	updateBillValue: UpdateFunctionType;
	updatePeopleNumberValue: UpdateFunctionType;
	updateTipPercentage: UpdateFunctionType;
	updateCustomTipPercentage: UpdateFunctionType;
	updateTipAmount: UpdateFunctionType;
	updateTotal: UpdateFunctionType;
	updateValidationErrors: (validationError: ValidationErrorPayload) => void;
	resetAll: () => void;
}

export const CalculatorContext = React.createContext({} as CalculatorContextType);

const CalculatorContextProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const value = {
		state,
		updateBillValue: (bill: string) => {
			dispatch({ type: Actions.UPDATE_BILL, payload: bill });
		},
		updatePeopleNumberValue: (peopleNumber: string) => {
			dispatch({ type: Actions.UPDATE_PEOPLE_NUMBER, payload: peopleNumber });
		},
		updateTipPercentage: (tipPercentage: string) => {
			dispatch({ type: Actions.UPDATE_TIP_PERCENTAGE, payload: tipPercentage });
		},
		updateCustomTipPercentage: (customTipPercentage: string) => {
			dispatch({ type: Actions.UPDATE_CUSTOM_TIP_PERCENTAGE, payload: customTipPercentage });
		},
		updateTipAmount: (tipAmount: string) => {
			dispatch({ type: Actions.UPDATE_TIP_AMOUNT, payload: tipAmount });
		},
		updateTotal: (total: string) => {
			dispatch({ type: Actions.UPDATE_TOTAL, payload: total });
		},
		updateValidationErrors: (validationError: ValidationErrorPayload) => {
			dispatch({ type: Actions.UPDATE_VALIDATION_ERRORS, payload: validationError });
		},
		resetAll: () => dispatch({ type: Actions.RESET_ALL }),
	};

	return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
};

export default CalculatorContextProvider;
