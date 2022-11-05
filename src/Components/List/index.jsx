import {
	Pagination,
	Card,
	Text,
	Badge,
	createStyles,
	Group,
	CloseButton,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings/index';
import Auth from '../Auth';

const useStyles = createStyles((theme) => ({
	badge: {
		textTransform: 'capitalize',
		fontSize: theme.fontSizes.xs,
	},
}));

const List = ({ deleteItem, list, toggleComplete }) => {
	const { pageItems, showCompleted } = useContext(SettingsContext);
	const [page, setPage] = useState(1);

	// pagination
	const listToRender = showCompleted
		? list
		: list.filter((item) => !item.complete);
	const listStart = pageItems * (page - 1);
	const listEnd = listStart + pageItems;
	const pageCount = Math.ceil(listToRender.length / pageItems);
	const displayList = listToRender.slice(listStart, listEnd);

	const { classes } = useStyles();
	return (
		<>
			{displayList.map((item) => (
				<Card
					key={item.id}
					shadow='md'
					p='lg'
					radius='md'
					withBorder
				>
					<Card.Section withBorder>
						<Group>
							<Badge
								className={classes.badge}
								color={item.complete ? 'green' : 'red'}
								variant='filled'
								onClick={() => toggleComplete(item.id)}
							>
								{item.complete ? 'complete' : 'pending'}
							</Badge>
							<Text>{item.assignee}</Text>
							<Auth capability='delete'>
								<CloseButton
									title='Delete ToDo Item'
									onClick={() => deleteItem(item.id)}
								></CloseButton>
							</Auth>
						</Group>
					</Card.Section>

					<Text>{item.text}</Text>

					<Group align='right'>
						<Text>Difficulty: {item.difficulty}</Text>
					</Group>
				</Card>
			))}

			<When condition={listToRender.length > 0}>
				<Pagination
					page={page}
					onChange={setPage}
					total={pageCount}
				/>
			</When>
		</>
	);
};

export default List;
