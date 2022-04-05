import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import answerReducer from './Stores/answers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		['User Input']: answerReducer,
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
