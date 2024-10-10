
import './App.css';
import Navbar from './pages/Navbar';
import Routing from './Routing';

function App() {
  return (
  <div className='row'>
    <div className='float-right'>
      <Navbar/>
    </div>
    <Routing/>
  </div>
  );
}

export default App;
