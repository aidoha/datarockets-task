import React, { Dispatch, PropsWithChildren } from 'react';
import reducer, { State, actions, initialState } from './reducer';

// interface CalculatorContextType {
// 	state: State;
// 	updateBillValue: (value: number) => void;
// 	updatePeopleNumberValue: (value: number) => void;
// }

export const CalculatorContext = React.createContext<any>({});

const CalculatorContextProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const value = {
		state,
		updateBillValue: (bill: string) => {
			dispatch({ type: actions.UPDATE_BILL, payload: bill });
		},
		updatePeopleNumberValue: (peopleNumber: string) => {
			dispatch({ type: actions.UPDATE_PEOPLE_NUMBER, payload: peopleNumber });
		},
		updateTipPercentage: (tipPercentage: string) => {
			dispatch({ type: actions.UPDATE_TIP_PERCENTAGE, payload: tipPercentage });
		},
		updateCustomTipPercentage: (customTipPercentage: string) => {
			dispatch({ type: actions.UPDATE_CUSTOM_TIP_PERCENTAGE, payload: customTipPercentage });
		},
		resetAll: () => dispatch({ type: actions.RESET_ALL }),
	};

	return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
};

export default CalculatorContextProvider;
