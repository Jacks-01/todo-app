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
	Grid,
	Box,
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

	box: {
		padding: '1rem',
		borderStyle: 'solid',
		borderColor: theme.colors.gray[3],
		borderWidth: '1px',
		borderRadius: theme.radius.sm,
		maxWidth: 300,
	},

	grid: {
		width: 'auto',
		paddingTop: '2rem',
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
				<Grid className={classes.grid}>
					<Grid.Col
						xs={12}
						sm={4}
					>
						<Box className={classes.box}>
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
						</Box>
					</Grid.Col>
					<Grid.Col
						xs={12}
						sm={8}
					>
						<Box className={classes.box}>
							<Text>Show Completed: {showCompleted.toString()}</Text>
							<Text>Items per page: {pageItems}</Text>
							<Text> Sort Keyword: {sort}</Text>
						</Box>
					</Grid.Col>
				</Grid>
			</Container>
		</>
	);
};

export default Settings;
