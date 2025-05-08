import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReservationsPage from '../pages/ReservationsPage';
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/reservations"
          element={user ? <ReservationsPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/"
          element={<Navigate to={user ? "/reservations" : "/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
