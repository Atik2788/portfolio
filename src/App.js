import { useContext } from 'react';
import './App.css';
import Contact from './Component/Contact/Contact';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';
import { themeContext } from './Context'

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode? 'white' : ''
      }}
    >
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;