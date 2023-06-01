import Typography from './components/common/typography';
import { COLORS } from './constants';

const TITLE = 'SPLITTER';

function App() {
	return (
		<div>
			<Typography variant="h1" textAlign="center" color={COLORS.cyan.very_dark_grayish}>
				{TITLE}
			</Typography>
		</div>
	);
}

export default App;
