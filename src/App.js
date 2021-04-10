import './App.css';
import ClassBased from './ClassBased';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './ButtonAppBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <Navbar />         */}
          <ButtonAppBar />
          <Home />
          <Button variant='contained' color='primary'>Button</Button>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
