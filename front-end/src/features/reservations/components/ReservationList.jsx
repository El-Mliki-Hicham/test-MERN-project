import React from 'react';

const ReservationList = ({ reservations }) => {
  if (!reservations) return <div>Loading reservations.. </div>;

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto", paddingRight: "10px", width: "50%" }}>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        reservations.map((res) => (
          <div
            key={res._id}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#f9f9f9"
            }}
          >
            <h4>Reservation Details</h4>
            <p><strong>Status:</strong> {res.status}</p>
            <p><strong>Service:</strong> {res.service}</p>
            <p><strong>Date:</strong> {new Date(res.reservationDate).toLocaleDateString()}</p>
            <p><strong>Message:</strong> {res.message}</p>
            <p><strong>Total Price:</strong> {res.totalPrice} DH</p>
            <p><strong>Created:</strong> {new Date(res.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReservationList;
