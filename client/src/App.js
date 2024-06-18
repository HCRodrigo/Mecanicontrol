import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RotasSide from './RotasSide';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RotasSide />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
