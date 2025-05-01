import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../services/userService';

const ReservationForm = ({ onCreate }) => {
  const [form, setForm] = useState({ message: "", reservationDate: "", service: "", totalPrice: "", user: "" });
  const [users, setUsers] = useState([]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // fetch users from service
    getUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send form data to the parent
      await onCreate(form); 
      // Reset the form
      setForm({ message: "", reservationDate: "", service: "", totalPrice: "", user: "" }); 
    } catch (err) {
      alert('Error creating reservation');
      console.error(err);
    }
  };

  return (
    <form className="login100-form validate-form" onSubmit={handleSubmit}>
      <span className="login100-form-title">Create Reservation</span>
      <div className="wrap-input100">
        <input className="input100" type="date" name="reservationDate" value={form.reservationDate} onChange={handleChange} />
        <span className="focus-input100"></span>
      </div>
      <div className="wrap-input100">
        <input className="input100" name="message" placeholder="Your Message" value={form.message} onChange={handleChange} />
        <span className="focus-input100"></span>
      </div>
      <div className="wrap-input100">
        <input className="input100" name="service" placeholder="Service Type" value={form.service} onChange={handleChange} />
        <span className="focus-input100"></span>
      </div>
      <div className="wrap-input100">
        <input className="input100" type="number" name="totalPrice" placeholder="Total Price" value={form.totalPrice} onChange={handleChange} />
        <span className="focus-input100"></span>
      </div>
      <div className="wrap-input100">
        <select className="input100" name="user" value={form.user} onChange={handleChange}>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
        <span className="focus-input100"></span>
      </div>
      <div className="container-login100-form-btn">
        <button className="login100-form-btn" type="submit">Create Reservation</button>
      </div>
    </form>
  );
};

export default ReservationForm;
