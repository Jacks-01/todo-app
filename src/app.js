import { Footer } from '@mantine/core';
import AppHeader from './Components/Header';

import ToDo from './routes/ToDo';


const App = () => {

  return (
    <>
      <AppHeader />
      <ToDo />;
      <Footer/>
    </>
  )
};

export default App;