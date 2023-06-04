import { useContext } from 'react';
import { radioButtons } from '../constants';
import { CalculatorContext } from '../store/calculatore-context';
import RadioButton from './common/radio-button';
import Input from './common/input';

interface TipContainerProps {
	tip: string;
}

const TipContainer = ({ tip }: TipContainerProps) => {
	const { updateTipPercentage } = useContext(CalculatorContext);

	const onChangeTip = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		updateTipPercentage(value);
	};

	return (
		<div className="grid grid-rows-3 grid-cols-2 gap-4 my-4 lg:grid-cols-3 lg:grid-rows-2">
			{radioButtons.map((button) => (
				<RadioButton
					key={button.id}
					id={button.id}
					name={button.name}
					label={button.label}
					value={button.value}
					selectedValue={tip}
					onChange={onChangeTip}
				/>
			))}
			<Input
				id="custom-tip"
				name="custom-tip"
				value={''}
				onChange={() => console.log('custom input')}
				placeholder="Custom"
			/>
		</div>
	);
};

export default TipContainer;
