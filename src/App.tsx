import Header from './components/header';
import InputsContainer from './components/inputs-container';
import CalculatorContextProvider from './store/calculatore-context';

function App() {
	return (
		<CalculatorContextProvider>
			<Header />
			<div className="flex flex-row justify-between w-2/3 bg-white p-8 rounded-xl m-auto">
				<div>
					<InputsContainer />
				</div>
				<div>output</div>
			</div>
		</CalculatorContextProvider>
	);
}

export default App;
