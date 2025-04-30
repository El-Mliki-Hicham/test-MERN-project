import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationsPage from '../pages/ReservationsPage';
const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/reservations" element={<ReservationsPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;