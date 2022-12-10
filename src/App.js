import { useContext } from 'react';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Contact/Projects/Projects';
import Header from './Component/Header/Header';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';
import { themeContext } from './Context'

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className='App p-0 m-0'
      style={{
        background: darkMode ? 'black' : '#eaeeef',
        color: darkMode ? 'white' : 'white'
      }}
    >

      <Navbar></Navbar>
      {/* <Header></Header> */}
      {/* <Intro></Intro> */}
      {/* <Services></Services> */}
      {/* <Portfolio></Portfolio> */}
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>

  );
}

export default App;