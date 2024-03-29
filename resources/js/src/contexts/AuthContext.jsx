import { createContext, useContext, useState } from 'react';
import axios from '../axios';

const AuthContent = createContext({
	user: null,
	setUser: () => { },
	csrfToken: () => { },
});

export const AuthProvider = ({ children }) => {
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user'))
	);

	// set user to local storage
	const setUser = (user) => {
		if (user) {
			window.localStorage.setItem('user', JSON.stringify(user));
		}

		console.log(user);
		_setUser(user);
	};

	// csrf token generation for guest methods
	const csrfToken = async () => {
		await axios.get('/sanctum/csrf-cookie');
		return true;
	};


	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};