// fetch users data

export const getReservations = async () =>{
    const res = await fetch('http://localhost:3030/api/reservations/index');
    if(!res.ok){
        throw new Error('faild to fetch reservations');
    }else{
        return res.json()
    }
}