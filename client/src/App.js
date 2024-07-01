import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RotasSide from './RotasSide';
import Logar from './views/Logar/index';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logar/>}/>
        <Route path="/*" element={<RotasSide />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
