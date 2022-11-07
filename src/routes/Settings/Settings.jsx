import { useForm } from '@mantine/form';
import AppHeader from '../../Components/Header';

const Settings = () => {
	const form = useForm({
		initialValues: {
			username: '',
			password: '',
		},
	});

	return (
		<>
			<AppHeader />
			<h1>Settings Page!</h1>
		</>
	);
};

export default Settings;
