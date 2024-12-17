// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const FormLogin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, { email, password });
//       console.log(response.data);
//       // handle success
//     } catch (error) {
//       console.error(error.response.data);
//       // handle error
//     }
//   };

//   const handleSignUpClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex w-full max-w-4xl shadow-md rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-third to-fourth w-1/2 flex justify-center items-center p-8">
//           <img src="./Humans.png" alt="human" className='w-full h-auto' />
//         </div>
//         <div className="bg-white w-1/2 p-8">
//           <h2 className="text-2xl font-bold mb-6">Masuk Sekarang</h2>
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Masukkan e-mail kamu"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Kata Sandi</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Masukkan kata sandi kamu"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Masuk</button>
//           </form>
//           <p className="mt-4 text-center text-sm"><a href="#" className="text-blue-500 hover:underline">Lupa kata sandi?</a></p>
//           <div className="mt-6 flex justify-between items-center">
//             <button className="bg-red-500 text-white py-2 px-4 rounded flex-1 mr-2">Daftar dengan Google</button>
//             <button className="bg-black text-white py-2 px-4 rounded flex-1 ml-2">Daftar dengan Apple</button>
//           </div>
//           <p className="mt-4 text-center text-sm">Belum punya akun? <button onClick={handleSignUpClick} className="text-blue-500 hover:underline">Daftar</button></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormLogin;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      localStorage.setItem('token', response.data.token); // Simpan JWT
      navigate('/edukasi'); // Redirect ke halaman setelah login
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message);
      // Kembalikan pengguna ke halaman sebelumnya jika login gagal
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
