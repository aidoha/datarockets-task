import { useContext } from 'react';
import { CalculatorContext } from '../store/calculatore-context';
import Input from './common/input';
import IconDollar from '../icons/dollar';
import IconPerson from '../icons/person';

const InputsContainer = () => {
	const {
		state: { bill, peopleNumber },
		updateBillValue,
		updatePeopleNumberValue,
	} = useContext(CalculatorContext);

	const onChangeBill = (value: string) => {
		const newValue = value.replace(/[^0-9.]/g, '');
		updateBillValue(newValue);
	};

	const onChangePeopleNumber = (value: string) => {
		const newValue = value.replace(/[^0-9]/g, '');
		updatePeopleNumberValue(newValue);
	};

	return (
		<div>
			<Input
				id="bill"
				name="bill"
				label="Bill"
				Icon={<IconDollar />}
				value={bill}
				onChange={onChangeBill}
			/>
			<Input
				id="people-number"
				name="people-number"
				label="Number of People"
				Icon={<IconPerson />}
				value={peopleNumber}
				onChange={onChangePeopleNumber}
			/>
		</div>
	);
};

export default InputsContainer;
