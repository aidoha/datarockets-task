import { PropsWithChildren } from 'react';

interface InputProps {
	id?: string;
	name: string;
	placeholder?: string;
	label?: string;
	Icon?: React.ReactNode;
	value: string;
	onChange: (value: string) => void;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	customOnFocus?: () => void;
	error?: string | null;
}

const Input = ({
	id = '',
	name = '',
	placeholder = '',
	label = '',
	Icon,
	value,
	onChange,
	onBlur,
	customOnFocus,
	error,
}: PropsWithChildren<InputProps>) => {
	const onFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (value === '0') {
			onChange('');
		}
	};

	return (
		<div>
			<div className="flex flex-row items-center justify-between">
				<label htmlFor={id} className="text-sm text-cyan-very_dark_grayish font-bold">
					{label}
				</label>
				{error && <p className="text-sm font-bold text-red-500">{error}</p>}
			</div>
			<div className="relative">
				{Icon && <div className="absolute top-1/2 left-0 px-4 -translate-y-2/4">{Icon}</div>}
				<input
					id={id}
					name={name}
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={({ target: { value } }) => onChange(value)}
					onBlur={onBlur}
					onFocus={customOnFocus ? customOnFocus : onFocus}
					className={`bg-cyan-light_grayish w-full h-11 border-box rounded py-2 ${
						Icon && 'pl-8'
					} pr-4 ${
						error ? 'border-2 border-solid border-red-500 outline-none' : 'outline-cyan-strong'
					} cursor-pointer text-right text-cyan-very_dark_grayish text-lg font-bold md:text-base`}
				/>
			</div>
		</div>
	);
};

export default Input;
