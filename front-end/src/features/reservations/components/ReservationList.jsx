import React, { useEffect ,  useState } from 'react';
import { getReservations } from '../../../services/reservationService';

const ReservationList = () => {
const [reservations , setReservations] =  useState([]);
const [loading , setLoading] =  useState(true);
const [error , setError] =  useState(null);

useEffect(() => {
    getReservations().then(res=>{
        setReservations(res.data);
        setLoading(false);
        // console.log(res.data);
        
    }).catch(err=>{
        setError(err);
        setLoading(false);
    })
},[])

if(loading){
    return <div>Loading...</div>
}

if(error){
    return <p style={{ color: 'red' }} >{error}</p>
}

return (
    <div>
        <h1>Reservation List</h1>
        <div>
            {reservations.map(reservation => (
                <div key={reservation._id} style={{ margin: '20px', padding: '10px', border: '1px solid black' }}>
                    <h3>Reservation Details</h3>
                    <p><strong>Status:</strong> {reservation.status}</p>
                    <p><strong>Service:</strong> {reservation.service}</p>
                    <p><strong>Date:</strong> {new Date(reservation.reservationDate).toLocaleDateString()}</p>
                    <p><strong>Message:</strong> {reservation.messsage}</p>
                    <p><strong>Total Price:</strong> {reservation.totalPrice} DH </p>
                    <p><strong>Created:</strong> {new Date(reservation.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    </div>
);
}


export default ReservationList;