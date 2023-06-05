import { Reducer } from 'react';

export interface State {
	bill: string;
	tip: string;
	customTip: string;
	peopleNumber: string;
	tipAmount: string;
	total: string;
}

interface Action {
	type: Actions;
	payload?: string;
}

export const initialState = {
	bill: '0',
	tip: '',
	customTip: '',
	peopleNumber: '0',
	tipAmount: '0.00',
	total: '0.00',
};

export enum Actions {
	UPDATE_BILL = 'UPDATE_BILL',
	UPDATE_PEOPLE_NUMBER = 'UPDATE_PEOPLE_NUMBER',
	UPDATE_TIP_PERCENTAGE = 'UPDATE_TIP_PERCENTAGE',
	UPDATE_CUSTOM_TIP_PERCENTAGE = 'UPDATE_CUSTOM_TIP_PERCENTAGE',
	UPDATE_TIP_AMOUNT = 'UPDATE_TIP_AMOUNT',
	UPDATE_TOTAL = 'UPDATE_TOTAL',
	RESET_ALL = 'RESET_ALL',
}

const calculatorReducer: Reducer<State, Action> = (state, action): State => {
	const { type, payload } = action;
	switch (type) {
		case Actions.UPDATE_BILL:
			return {
				...state,
				bill: payload as string,
			};
		case Actions.UPDATE_PEOPLE_NUMBER:
			return {
				...state,
				peopleNumber: payload as string,
			};
		case Actions.UPDATE_TIP_PERCENTAGE:
			return {
				...state,
				tip: payload as string,
			};
		case Actions.UPDATE_CUSTOM_TIP_PERCENTAGE:
			return {
				...state,
				customTip: payload as string,
			};
		case Actions.UPDATE_TIP_AMOUNT:
			return {
				...state,
				tipAmount: payload as string,
			};
		case Actions.UPDATE_TOTAL:
			return {
				...state,
				total: payload as string,
			};
		case Actions.RESET_ALL:
			return initialState;
		default:
			return state;
	}
};

export default calculatorReducer;
