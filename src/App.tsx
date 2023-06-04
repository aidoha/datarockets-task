import Header from './components/header';
import InputsContainer from './components/inputs-container';
import OutputContainer from './components/output-container';
import CalculatorContextProvider from './store/calculatore-context';

function App() {
	return (
		<CalculatorContextProvider>
			<Header />
			<div className="flex flex-col justify-between bg-white p-8 rounded-xl m-0 gap-8 lg:m-auto lg:w-2/3 lg:flex-row xl:w-1/2">
				<div className="w-full lg:w-1/2">
					<InputsContainer />
				</div>
				<div className="w-full lg:w-1/2">
					<OutputContainer />
				</div>
			</div>
		</CalculatorContextProvider>
	);
}

export default App;
