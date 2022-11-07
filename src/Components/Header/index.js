import { Header, createStyles } from '@mantine/core'
import { Link } from 'react-router-dom';
import Login from '../Login'

export const useStyles = createStyles((theme) => ({

    header: {
        backgroundColor: theme.colors.blue[5],
        color: theme.colors.gray[0],
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2em',
    },

    link: {
        display: 'flex',
        width: '10rem',
        justifyContent: 'space-evenly',
    }

    
}))

const AppHeader = () => {
    const { classes } = useStyles();
    return (
        <>
            <Header className={classes.header}>
                <nav className={classes.link}>
                <Link to={'/'}>Home</Link>
                <Link to={'settings'}> Settings </Link>
                </nav>
                <Login />
            </Header>
        </>
    );
}

export default AppHeader;