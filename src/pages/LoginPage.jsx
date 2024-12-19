// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const LoginPage = ({ setToken }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       setToken(data.token);
//       navigate('/edukasi');
//     } else {
//       alert(data.error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleLogin} className="w-1/3 bg-white p-8 rounded shadow">
//         <h2 className="text-2xl mb-4">Login</h2>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
//         <p className="mt-4">
//           Belum memiliki akun? <Link to="/signup" className="text-blue-500">Daftar disini</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      navigate('/edukasi');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="w-1/3 bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">Login</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        <p className="mt-4">
          Belum memiliki akun? <Link to="/signup" className="text-blue-500">Daftar disini</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
