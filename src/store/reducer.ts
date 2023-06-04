export interface State {
	bill: string;
	tip: null | string;
	customTip: string;
	peopleNumber: string;
	tipAmount: string;
	total: string;
}

// interface Action {
// 	// type: keyof typeof actions;
// 	type: any;
// 	payload?: string;
// }

export const initialState = {
	bill: '0',
	tip: '',
	customTip: '',
	peopleNumber: '0',
	tipAmount: '0',
	total: '0',
};

export const actions = {
	UPDATE_BILL: 'UPDATE_BILL',
	UPDATE_PEOPLE_NUMBER: 'UPDATE_PEOPLE_NUMBER',
	UPDATE_TIP_PERCENTAGE: 'UPDATE_TIP_PERCENTAGE',
	UPDATE_CUSTOM_TIP_PERCENTAGE: 'UPDATE_CUSTOM_TIP_PERCENTAGE',
	RESET_ALL: 'RESET_ALL',
};

const calculatorReducer = (state: State, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case actions.UPDATE_BILL:
			return {
				...state,
				bill: payload,
			};
		case actions.UPDATE_PEOPLE_NUMBER:
			return {
				...state,
				peopleNumber: payload,
			};
		case actions.UPDATE_TIP_PERCENTAGE:
			return {
				...state,
				tip: payload,
			};
		case actions.UPDATE_CUSTOM_TIP_PERCENTAGE:
			return {
				...state,
				customTip: payload,
			};
		case actions.RESET_ALL:
			return initialState;
		default:
			return state;
	}
};

export default calculatorReducer;
