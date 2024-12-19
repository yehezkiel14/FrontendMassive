import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Signup successful! Please login.');
      navigate('/login');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="w-1/3 bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">Signup</h2>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          className="w-full p-2 mb-4 border rounded"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 mb-4 border rounded"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
        <p className="mt-4">
          Sudah memiliki akun? <Link to="/login" className="text-blue-500">Login disini</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
