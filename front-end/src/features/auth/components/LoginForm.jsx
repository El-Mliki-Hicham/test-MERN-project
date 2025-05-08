import React, { useState } from "react";
import { loginUser } from "../../../services/authService";
  
const LoginForm =()=>{

    const [form , setForm] = useState({email:"" , password:""});
    const [error , setError] = useState(null);
    const [user , setUser] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          const response = await loginUser(form);
          console.log(response.success);
          if(response.success == true){
              setUser(response.data); 
              const userData = {
                id: response.data._id,
                name: response.data.name,
                email: response.data.email,
                role: response.data.role,
              };
              localStorage.setItem('user', JSON.stringify(userData));
              localStorage.setItem('userId', response.data._id,);
              window.location.href = '/reservation';
              
            }else{
                
                setError(response?.error || 'Login failed');
            }
        } catch (err) {
          setError(err.response?.data?.message || 'Login failed');
        }
      };


      return (
        <div style={{ 
            maxWidth: "400px", 
            margin: "40px auto", 
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#fff"
        }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
            
            {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    required 
                    style={{
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "16px"
                    }}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    required 
                    style={{
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "16px"
                    }}
                />
                <button 
                    type="submit" 
                    style={{
                        padding: "12px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>
            </form>
    
            {user && (
                <div style={{ 
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#e8f5e9',
                    borderRadius: '4px',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: '5px 0' }}>Welcome, {user.name}!</p>
                    <p style={{ margin: '5px 0', color: '#666' }}>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};
    
    export default LoginForm;