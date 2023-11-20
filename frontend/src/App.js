import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SalesPredictionForm from './components/SalesPredictionForm';
import { ChakraProvider } from '@chakra-ui/react'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/sales' element={<SalesPredictionForm />} />
        </Routes>
      </Router>
  </div>
  </ChakraProvider>
  );
}

export default App;
