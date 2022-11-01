import { Header, createStyles } from '@mantine/core'

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
            <Header className={classes.header}>Home</Header>
        </>
    );
}

export default AppHeader;