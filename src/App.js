import './App.css';
import ClassBased from './ClassBased';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />        
          <Home />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
