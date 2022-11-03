import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { useForm } from '@mantine/form';
import { Box, TextInput } from '@mantine/core';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { isLoggedIn, user, error, can, login, logout } =
		useContext(AuthContext);

	const form = useForm({
		initialValues: {
			username: '',
			password: '',
		},
	});

	return (
		<Box sx={{maxWidth: 300, position: 'right'}}>
			<form
				onSubmit={form.onSubmit((values) => {
					console.log(values);
				})}
			>
				<TextInput
					withAsterisk
					label='username'
					placeholder='username'
					{...form.getInputProps('username')}
				/>

				<TextInput
					withAsterisk
					label='password'
                    placeholder='password'
                    {...form.getInputProps('password')}
				/>
			</form>
		</Box>
	);
};

export default Login;

// onSubmit={form.onSubmit((values) => {
//     setUsername(values);
//     setPassword(values);
// })}
