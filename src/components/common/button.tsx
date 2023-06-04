import { PropsWithChildren } from 'react';

interface ButtonProps {
	onClick: () => void;
}

const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			onClick={onClick}
			className="bg-cyan-dark_grayish hover:bg-cyan-light_grayish active:bg-cyan-strong rounded text-cyan-very_dark_grayish w-full uppercase font-bold text-xl py-2 px-4"
		>
			{children}
		</button>
	);
};

export default Button;
