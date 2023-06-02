import Header from './components/header';
import InputsContainer from './components/inputs-container';
import OutputContainer from './components/output-container';
import CalculatorContextProvider from './store/calculatore-context';

function App() {
	return (
		<CalculatorContextProvider>
			<Header />
			<div className="flex flex-col justify-between bg-white p-8 rounded-xl m-0 gap-8 md:m-auto md:w-1/2 md:flex-row">
				<div className="md:w-1/2">
					<InputsContainer />
				</div>
				<div className="md:w-1/2">
					<OutputContainer />
				</div>
			</div>
		</CalculatorContextProvider>
	);
}

export default App;
