import { useForm } from '@mantine/form';
import AppHeader from '../../Components/Header';
import { Container, createStyles, Text } from '@mantine/core';
import { AuthContext } from '../../Context/Auth';
import { SettingsContext } from '../../Context/Settings';

export const useStyles = createStyles((theme) => ({
	container: {
		width: '80vw',
		marginTop: '3rem',
	},
}));

const Settings = ({}) => {
	const form = useForm({
		initialValues: {
			username: '',
			password: '',
		},
	});

	const { classes } = useStyles();

	return (
		<>
			<AppHeader />
			<Container className={classes.container}>
				<header data-testid='todo-header'>
					<Text
						className={classes.header}
						data-testid='todo-h1'
					>
						To Do List: {incomplete} items pending
					</Text>
				</header>
			</Container>
		</>
	);
};

export default Settings;
