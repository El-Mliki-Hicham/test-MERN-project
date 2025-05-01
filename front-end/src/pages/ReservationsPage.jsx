import React, { useEffect, useState } from 'react';
import { getReservations, storeReservation } from '../services/reservationService';
import ReservationForm from '../features/reservations/components/ReservationForm';
import ReservationList from '../features/reservations/components/ReservationList';

const ReservationPage = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const response = await getReservations();
      setReservations(response.data);
    } catch (err) {
      console.error("Error fetching reservations", err);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleCreate = async (formData) => {
    try {
      await storeReservation(formData);
      alert('Reservation created successfully!');
      fetchReservations(); 
    } catch (err) {
      alert('Error creating reservation');
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ReservationList reservations={reservations} />
          <ReservationForm onCreate={handleCreate} />
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
