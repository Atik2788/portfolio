import './App.css';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;