interface RadioButtonProps {
	id: string;
	name: string;
	label: string;
	value: string;
	selectedValue: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ id, name, label, value, selectedValue, onChange }: RadioButtonProps) => {
	return (
		<div
			className={`radio_button ${
				selectedValue === value
					? 'bg-cyan-strong text-cyan-very_dark_grayish'
					: 'bg-cyan-very_dark_grayish text-white'
			}`}
		>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={selectedValue === value}
				onChange={onChange}
				className="appearance-none"
			/>
			<label htmlFor={id} className="cursor-pointer font-bold">
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
