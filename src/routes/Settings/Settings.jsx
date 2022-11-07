import { useContext, useState } from 'react';
import { useForm } from '@mantine/form';
import AppHeader from '../../Components/Header';
import {
	Container,
	createStyles,
	NumberInput,
	Switch,
	Text,
	TextInput,
	Button,
} from '@mantine/core';
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
	const {
		showCompleted,
		pageItems,
		sort,
		setShowCompleted,
		setPageItems,
		setSort,
	} = useContext(SettingsContext);

	const [checked, setChecked] = useState(false);
	const form = useForm({
		initialValues: {
			showCompleted: checked,
			pageItems: pageItems,
			sort: sort,
		},
	});

	const { classes } = useStyles();


	return (
		<>
			<AppHeader />
			<Container className={classes.container}>
				<header>
					<Text className={classes.header}>
						<IconSettings style={{ marginRight: '.5em' }} /> Settings
					</Text>
				</header>

				<form onSubmit={form.onSubmit((values) => console.log(values))}>
					<Switch
						label='Show Completed ToDos'
						checked={checked}
						onClick={() => {
							setChecked(!checked);
						}}
					/>
					<NumberInput
						placeholder='# of items per page'
						label='Items'
						withAsterisk
						{...form.getInputProps('pageItems')}
					/>
					<TextInput
						label='Sort Keyword'
						placeholder='difficulty'
						{...form.getInputProps('sort')}
					/>

					<Button
						type='submit'
						onClick={() => {
							setPageItems(form.values.pageItems);
							setSort(form.values.sort);
							setShowCompleted(checked);
						}}
					>
						Show New Settings
					</Button>
				</form>
			</Container>
		</>
	);
};

export default Settings;
