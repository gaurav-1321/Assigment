import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      const role = res.data.role;
      if(role === 'admin') window.location.href = '/admin';
      else if(role === 'vendor') window.location.href = '/vendor';
      else window.location.href = '/user';
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-center text-2xl mb-6 font-bold">Event Management Login</h2>
        <input 
          type="email" placeholder="Email" 
          className="w-full border p-2 mb-4 rounded"
          value={email} onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full border p-2 mb-4 rounded"
          value={password} onChange={e => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}
