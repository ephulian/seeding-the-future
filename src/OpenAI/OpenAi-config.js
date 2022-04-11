import OpenAI from 'openai-api';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const openai = new OpenAI(OPENAI_API_KEY);

////// Other config options
////////////////////////////////////////////////
//
//      engine: 'davinci',
// 		prompt: 'this is a test',
// 		maxTokens: 5,
// 		temperature: 0.9,
// 		topP: 1,
// 		presencePenalty: 0,
// 		frequencyPenalty: 0,
// 		bestOf: 1,
// 		n: 1,
// 		stream: false,
// 		stop: ['\n', 'testing'],
