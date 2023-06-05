import { useCallback, useContext, useEffect } from 'react';
import { CalculatorContext } from '../store/calculatore-context';
import Input from './common/input';
import IconDollar from '../icons/dollar';
import IconPerson from '../icons/person';
import TipContainer from './tip-container';

const InputsContainer = () => {
	const {
		state: { bill, peopleNumber, tip, customTip },
		updateBillValue,
		updatePeopleNumberValue,
		updateTipPercentage,
		updateCustomTipPercentage,
		updateTipAmount,
		updateTotal,
	} = useContext(CalculatorContext);

	const onChangeBill = useCallback(
		(value: string) => {
			const newValue = value.replace(/[^0-9.]/g, '');
			updateBillValue(newValue);
		},
		[updateBillValue]
	);

	const onChangePeopleNumber = useCallback(
		(value: string) => {
			const newValue = value.replace(/[^0-9]/g, '');
			updatePeopleNumberValue(newValue);
		},
		[updatePeopleNumberValue]
	);

	useEffect(() => {
		const shouldApplyCalculations =
			parseFloat(bill) > 0 && parseInt(peopleNumber, 10) && (!!tip || !!customTip);

		if (shouldApplyCalculations) {
			const tipAmount = (Number(bill) * (Number(tip || customTip) / 100)) / Number(peopleNumber);
			updateTipAmount(tipAmount.toFixed(2));

			const totalBill = Number(Number(bill) / Number(peopleNumber) + Number(tipAmount.toFixed(2)));
			updateTotal(totalBill.toFixed(2));
		}
	}, [bill, peopleNumber, tip, customTip]);

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
			<TipContainer {...{ tip, customTip, updateTipPercentage, updateCustomTipPercentage }} />
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
