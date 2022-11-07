import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);

	const can = (capability) => {
		// note shorthand
		return user?.capabilities?.includes(capability);
	};

	const login = async (username, password) => {
		// for demonstration the user data is hardcoded
		console.log('yo', username, password);
		let config = {
			baseURL: 'https://api-js401.herokuapp.com',
			url: '/signin',
			method: 'post',
			auth: {
				username,
				password,
			},
		};

		let response = axios.await(config);

		let { token } = response.data;

		if (token) {
			try {
				//validate the token
				console.log('validating the token...');
				_validateToken(token);
			} catch (e) {
				console.error(e);
			}
		}
	};

	function _validateToken(token) {
		try {
			let validUser = jwt_decode(token);
			if (validUser) {
				setUser(validUser);
				setIsLoggedIn(true);
				console.log('I am logged in');
				cookie.save('auth', token);
			}
		} catch (e) {
			setIsLoggedIn(false);
			setError(e);
			console.error(e);
		}
	}

	const logout = () => {
		console.log('logging out');
		setUser({});
		setIsLoggedIn(false);
		setError(null);
		cookie.remove('auth');
	};

	useEffect(() => {
		let token = cookie.load('auth');
		if (token) {
			_validateToken(token);
		}
	}, []);

	let values = {
		isLoggedIn,
		user,
		error,
		can,
		login,
		logout,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
