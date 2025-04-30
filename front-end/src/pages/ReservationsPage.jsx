
import React from 'react';
import { ReservationList } from '../features/reservations';
import ReservationForm from '../features/reservations/components/ReservationForm';

const ReservationsPage = () => {
  return (
    <div>
      <h1>Reservations page</h1>
      <ReservationForm />
      <ReservationList />
    </div>
  );
};

export default ReservationsPage;