import { useForm } from "@mantine/form";



const Settings = () => {

    const form = useForm({
        initialValues: {
            username: '',
            password: '',
        },
    });

    return ( 

        <h1>Settings Page!</h1>

     );
}
 
export default Settings;