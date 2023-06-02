import { useContext } from 'react';
import { CalculatorContext } from '../store/calculatore-context';
import Button from './common/button';

const BUTTON_TITLE = 'RESET';

const OutputContainer = () => {
	const {
		state: { tipAmount, total },
		resetAll,
	} = useContext(CalculatorContext);
	const outputs = [
		{
			label: 'Tip Amount',
			value: tipAmount,
		},
		{
			label: 'Total',
			value: total,
		},
	];

	const onReset = () => resetAll();

	return (
		<div className="bg-cyan-very_dark_grayish p-8 rounded-xl w-full relative">
			{outputs.map(({ label, value }, index) => (
				<div
					key={`${label}.${index}`}
					className="flex flex-row items-center justify-between first:m-0 mt-8"
				>
					<div>
						<p className="text-white font-bold text-sm">{label}</p>
						<p className="text-cyan-very_light_grayish text-xs">/ person</p>
					</div>
					<div>
						<h1 className="text-cyan-strong font-bold ml-2 text-3xl">${value}</h1>
					</div>
				</div>
			))}
			<div className="mt-8">
				<Button onClick={onReset}>{BUTTON_TITLE}</Button>
			</div>
		</div>
	);
};

export default OutputContainer;
