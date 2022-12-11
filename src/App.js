import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import LeftSide from './Component/LeftSide/LeftSide';
import Navbar from './Component/Navbar/Navbar';
import RightSide from './Component/RightSide/RightSide';
import { routes } from './Component/Routes/Routes';
import { themeContext } from './Context'

function App() {

  // const theme = useContext(themeContext)
  // const darkMode = theme.state.darkMode;

  return (

    <RouterProvider router = {routes}></RouterProvider>

    // <div className='App p-0 m-0'
    //   style={{
    //     background: darkMode ? 'black' : '#f6f6f6',
    //     color: darkMode ? 'white' : 'black'
    //   }}
    // >

    //   <Navbar></Navbar>

    //   <div className=' lg:flex gap-10 lg:px-7 p-2'>
    //     <div className='lg:w-3/6 lg:mb-0 mb-5'>
    //       <LeftSide></LeftSide>
    //     </div>

    //     <div className='lg:w-full'>
    //       <RightSide></RightSide>
    //     </div>
    //   </div>

    // </div>

  );
}

export default App;