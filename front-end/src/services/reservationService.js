// fetch users data
import { API_BASE_URL } from "../config/api";

export const getReservations = async () =>{
    const res = await fetch(`${API_BASE_URL}/reservations/index`);
    if(!res.ok){
        throw new Error('faild to fetch reservations');
    }else{
        return res.json()
    }
}


export const storeReservation = async (formData) => {
    const res = await fetch(`${API_BASE_URL}/reservations/store`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!res.ok) {
      throw new Error('Failed to store reservation');
    }else{
        return res.json()
    }
  };