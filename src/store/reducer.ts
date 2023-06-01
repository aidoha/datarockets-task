export interface State {
	bill: string;
	tip: null | string;
	peopleNumber: string;
	tipAmount: string;
	total: string;
}

interface Action {
	// type: keyof typeof actions;
	type: any;
	payload: string;
}

export const initialState = {
	bill: '0',
	tip: null,
	peopleNumber: '0',
	tipAmount: '0',
	total: '0',
};

export const actions = {
	UPDATE_BILL: 'UPDATE_BILL',
	UPDATE_PEOPLE_NUMBER: 'UPDATE_PEOPLE_NUMBER',
};

const calculatorReducer = (state: State, action: Action) => {
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
		default:
			return state;
	}
};

export default calculatorReducer;
