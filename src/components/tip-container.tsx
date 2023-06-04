import RadioButton from './common/radio-button';
import Input from './common/input';
import { radioButtons } from '../constants';

interface TipContainerProps {
	tip: string;
	updateTipPercentage: (value: string) => void;
	customTip: string;
	updateCustomTipPercentage: (value: string) => void;
}

const SELECT_TIP_TITLE = 'Select Tip %';

const TipContainer = ({
	tip,
	customTip,
	updateTipPercentage,
	updateCustomTipPercentage,
}: TipContainerProps) => {
	const onChangeTip = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		updateTipPercentage(value);
	};

	const onChangeCustomTip = (value: string) => {
		updateCustomTipPercentage(value);
	};

	return (
		<div className="my-8">
			<p className="text-sm text-cyan-very_dark_grayish font-bold">{SELECT_TIP_TITLE}</p>
			<div className="grid grid-rows-3 grid-cols-2 gap-2 my-4 lg:grid-cols-3 lg:grid-rows-2">
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
					placeholder="Custom"
					value={customTip}
					onChange={onChangeCustomTip}
				/>
			</div>
		</div>
	);
};

export default TipContainer;
