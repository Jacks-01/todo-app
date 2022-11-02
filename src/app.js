import { Footer } from '@mantine/core';
import AppHeader from './Components/Header';

import ToDo from './Components/ToDo';


const App = () => {
  // // create context objects for:
  // const TaskContext = createContext(false); // 1. Showing completed Tasks
  // const ThemeContext = createContext('dark'); // 2. Light/Dark Theme
  // const ItemAmountContext = createContext(5); // 3. How many items per page
  // const SortContext = createContext(''); // 4. Default sort string (all)

  return (
    <>
      <AppHeader />
      <ToDo />;
      <Footer/>
    </>
  )
};

export default App;