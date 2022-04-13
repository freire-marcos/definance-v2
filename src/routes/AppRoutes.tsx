import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Compteste } from '../pages/Compteste';
import { Home } from '../pages/Home';

export const AppRoutes: React.FC = ({ children }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/teste' element={<h2>link errado, otário</h2>} />
      <Route path='/nova' element={<Compteste />} />
    </Routes>
  );
};