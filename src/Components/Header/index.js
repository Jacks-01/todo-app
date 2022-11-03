import { Header, createStyles, Container } from '@mantine/core'
import Login from '../Login'

export const useStyles = createStyles((theme) => ({

    header: {
        backgroundColor: theme.colors.blue[5],
        color: theme.colors.gray[0],
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        padding: '2em',

    }
}))

const AppHeader = () => {
    const { classes } = useStyles();
    return (
        <>
            <Header className={classes.header}> Home
                    <Login />
            </Header>
        </>
    );
}

export default AppHeader;