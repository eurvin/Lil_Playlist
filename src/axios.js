import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://wincacademydatabase.firebaseio.com/eurvin/',
});

export default instance;
