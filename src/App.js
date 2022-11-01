import { createContext } from 'react';

import ToDo from './Components/ToDo';
// create context objects for:
const TaskContext = createContext(false); // 1. Showing completed Tasks
const ThemeContext = createContext('dark'); // 2. Light/Dark Theme
const ItemAmountContext = createContext(5); // 3. How many items per page
const SortContext = createContext(''); // 4. Default sort string (all)


const App = () => {
  return (<ToDo />);
}

export default App;