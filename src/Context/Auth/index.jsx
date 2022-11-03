import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

const testUsers = {
	admin: {
		username: 'admin',
		password: 'ADMIN',
		email: 'admin@fakeuser.com',
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM',
	},
	editor: {
		username: 'editor',
		password: 'EDITOR',
		email: 'editor@fakeuser.com',
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZjk5MzNjZTQ5MDAxODlmMzhiYSIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4NTY5LCJleHAiOjE2NTg5MTIxNjl9.073ppQCHbplYN9befn8JElcP4zgFX6TEe_ARUQZc0KU',
	},
	user: {
		username: 'user',
		password: 'USER',
		email: 'user@fakeuser.com',
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBmMGZjMzNjZTQ5MDAxODlmMzhjMCIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4OTI0LCJleHAiOjE2NTg5MTI1MjR9.t7c7k2LbaTxsdfYjx_WC3QiP4MycU8sZryVyXQqJQH',
	},
};

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);

	const can = (capability) => {
		// note shorthand
		return user?.capabilities?.includes(capability);
	};

	const login = (username, password) => {
		// for demonstration the user data is hardcoded
		let authCredentials = testUsers[username];

		if (authCredentials && authCredentials.password === password) {
			try {
				//validate the token
				_validateToken(authCredentials.token);
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
		setUser({});
		setIsLoggedIn(false);
		setError(null);
		cookie.remove('auth');

		let values = {
			isLoggedIn,
			user,
			error,
			can,
			login,
			logout,
		};
        
		return (
			<AuthContext.Provider value={values}>{children}</AuthContext.Provider>
		);
	};
};

export default AuthProvider;
