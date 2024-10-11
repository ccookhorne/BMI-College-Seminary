
import { useRoutes } from 'react-router';
import './App.css';
import Navbar from './pages/Navbar';
import Routing from './Routing';

function App() {
  return (
  <div className='row'>
    <div className='float-right'>
      <Navbar/>
    </div>
    {useRoutes(Routing)}
  </div>
  );
}

export default App;
