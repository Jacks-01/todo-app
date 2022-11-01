import React, { useEffect, useContext, useState } from 'react';
import useFormHook from '../../hooks/form';
import List from '../List/index';
import { SettingsContext } from '../../Context/Settings';

import { v4 as uuid } from 'uuid';

import { Grid, Button, Container, createStyles, Box, TextInput, Slider, Text } from '@mantine/core';
import { useForm } from '@mantine/form';


export const useStyles = createStyles((theme) => ({

  container: {
    marginTop: '3rem'
  },

  box: {
    padding: '1rem',
    marginTop: '2rem',
    borderStyle: 'solid',
    borderColor: theme.colors.gray[3],
    borderWidth: '1px',
    borderRadius: theme.radius.sm,
    maxWidth: 300,
  },

  header: {
    backgroundColor: theme.colors.dark[5],
    color: 'whitesmoke',
    width: '80vw',
    height: '3rem',
    borderRadius: theme.radius.sm,
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    size: theme.fontSizes.md,
  },

  slider: {
    padding: '2rem'
  },

  Button: {
    margin: 20,
  }
}));



const ToDo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useFormHook(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  const form = useForm({
    initialValues: {
      item: '',
      assignee: '',
      slider: 0,
    }
  });

  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <header data-testid="todo-header">
          <Text className={classes.header} data-testid="todo-h1">To Do List: {incomplete} items pending</Text>
        </header>


        <Box className={classes.box}>
          <form onSubmit={handleSubmit}>


            <h2>Add To Do Item</h2>
            <TextInput
              label='To Do Item:'
              placeholder='Item Details'
              {...form.getInputProps('item')}
            >
            </TextInput>

            <TextInput
              label='Assigned to:'
              placeholder='Assignee Name'
              {...form.getInputProps('assignee')}>
            </TextInput>

            <span>Difficulty</span>
            <Slider
              className={classes.slider}
              min={0}
              max={5}
            />

            <Button className={classes.Button} type="submit">Add Item</Button>

          </form>

        </Box>

        <Grid>
          <List list={list} toggleComplete={incomplete} />
        </Grid>


      </Container>
    </>
  )
};

export default ToDo;
