import { useContext } from 'react';
import { useForm } from '@mantine/form';
import AppHeader from '../../Components/Header';
import { Container, createStyles, Text } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings';
import { IconSettings } from '@tabler/icons';

export const useStyles = createStyles((theme) => ({
	container: {
		width: '80vw',
		marginTop: '3rem',
	},
	header: {
		backgroundColor: theme.colors.dark[5],
		color: 'whitesmoke',
		height: '3rem',
		borderRadius: theme.radius.sm,
		display: 'flex',
		alignItems: 'center',
		padding: '1rem',
		size: theme.fontSizes.md,
	},
}));

const Settings = ({}) => {
	const form = useForm({
		initialValues: {},
	});

	const { classes } = useStyles();

	const {
		showCompleted,
		pageItems,
		sort,
		setShowCompleted,
		setPageItems,
		setSort,
	} = useContext(SettingsContext);

	return (
		<>
			<AppHeader />
			<Container className={classes.container}>
				<header>
					<Text className={classes.header}>
						<IconSettings style={{marginRight: '.5em'}}/> Settings
					</Text>
				</header>
			</Container>
		</>
	);
};

export default Settings;
