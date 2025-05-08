// fetch users data
import { API_BASE_URL } from "../config/api";

export const loginUser = async (credentials) => {
    const res = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    if (!res.ok) {
      return res.json();
    }else{
        return res.json()
    }
  };