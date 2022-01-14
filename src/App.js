import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import Leagues from './components/Leagues';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Leagues />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  </BrowserRouter>
);

export default App;
