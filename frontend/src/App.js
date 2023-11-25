import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Sales from './components/Sales';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/sales' element={<Sales />} />
        </Routes>
      </Router>
  </div>
  </ChakraProvider>
  );
}

export default App;
