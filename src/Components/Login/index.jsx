import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { useForm } from '@mantine/form';
import { Button, TextInput, createStyles } from '@mantine/core';
import { If, Else, Then } from 'react-if';

export const useStyles = createStyles(() => ({
	form: {
		display: 'flex',
		marginLeft: 'auto',
		width: '600px',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
}));

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

	const { classes } = useStyles();

	return (
		<form
			onSubmit={form.onSubmit((values) => login(username, password))}
			className={classes.form}
		>
			<TextInput
				withAsterisk
				placeholder='username'
				{...form.getInputProps('username')}
			/>

			<TextInput
				withAsterisk
				placeholder='password'
				{...form.getInputProps('password')}
			/>
			
			<If condition={isLoggedIn}>
				<Then>
					<Button
						color='red'
						onClick={() => logout()}
					>
						Log out
					</Button>
				</Then>
				<Else>
					<Button
						color='green'
						type='submit'
						onClick={() => {
							setUsername(form.values.username);
							setPassword(form.values.password);
						}}
					>
						Log In
					</Button>
				</Else>
			</If>
		</form>
	);
};

export default Login;
