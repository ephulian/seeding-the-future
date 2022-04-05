import { createSlice } from '@reduxjs/toolkit';

export const answersSlice = createSlice({
	name: 'User Input',
	initialState: {
		answers: {},
		createdAt: '123',
	},
	reducers: {
		addAnswer: (state, action) => {
			state.answers[action.payload.id] = action.payload.value;
		},
	},
});

export const { addAnswer } = answersSlice.actions;
export default answersSlice.reducer;
