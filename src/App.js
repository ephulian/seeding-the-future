import './Styles/root//global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Compoments/Home';
import Q1 from './Compoments/Questions/Q1';
import Q2 from './Compoments/Questions/Q2';
import Q3 from './Compoments/Questions/Q3';
import Q4 from './Compoments/Questions/Q4';
import Q5 from './Compoments/Questions/Q5';
import Q6 from './Compoments/Questions/Q6';
import Header from './Compoments/Header';
import Finish from './Compoments/Finish';

function App() {
	return (
		<Router>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/q1' element={<Q1 />} />
				<Route path='/q2' element={<Q2 />} />
				<Route path='/q3' element={<Q3 />} />
				<Route path='/q4' element={<Q4 />} />
				<Route path='/q5' element={<Q5 />} />
				<Route path='/q6' element={<Q6 />} />
				<Route path='/finish' element={<Finish />} />
			</Routes>
		</Router>
	);
}

export default App;
