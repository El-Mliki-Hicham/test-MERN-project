// fetch users data
import { API_BASE_URL } from "../config/api";

export const getUsers = async () =>{
    const res = await fetch(`${API_BASE_URL}/users/index`);
    if(!res.ok){
        throw new Error('faild to fetch users');
    }else{
        return res.json()
    }
}
