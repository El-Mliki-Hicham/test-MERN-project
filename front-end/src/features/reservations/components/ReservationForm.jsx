import React, { useState } from 'react';
import { storeReservation } from '../../../services/reservationService';

const ReservationForm = () => {
  const [form, setForm] = useState({ name: '', status: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await storeReservation(form);
      alert('Reservation created successfully!');
      console.log(data);
    } catch (err) {
      alert('Error creating reservation');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date" 
        name="reservationDate" 
        placeholder="Reservation Date"
        onChange={handleChange}
      />
      <input 
        name="messsage" 
        placeholder="Your Message" 
        onChange={handleChange}
      />
      <input 
        name="service" 
        placeholder="Service Type"
        onChange={handleChange}
      />
      <input 
        type="number"
        name="totalPrice" 
        placeholder="Total Price"
        onChange={handleChange}
      />
      <input 
        name='user'
        placeholder="User Name"
        value="68126c0c8c9d6a529aee0371"
        onChange={handleChange}
      />
      <button type="submit">Create Reservation</button>
    </form>
  );
};

export default ReservationForm;