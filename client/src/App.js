import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/cliente/cliente';
import Sidebar from './components/sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
