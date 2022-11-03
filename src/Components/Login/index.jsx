import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { useForm } from '@mantine/form';
import { Box, Button, TextInput, createStyles  } from '@mantine/core';

export const useStyles = createStyles(() => ({

    // form: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     marginLeft: '25rem'
    // }
}))

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
				onSubmit={form.onSubmit((values) => {
					console.log(values);
                })}
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
                
                <Button color='red' type='submit' onClick={() => {login(username, password)}}>Login</Button>
			</form>
	);
};

export default Login;

// onSubmit={form.onSubmit((values) => {
//     setUsername(values);
//     setPassword(values);
// })}
