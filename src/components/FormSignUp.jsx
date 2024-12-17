// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const FormSignUp = () => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       return alert('Passwords do not match');
//     }
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, { fullName, email, password });
//       console.log(response.data);
//       // handle success
//       navigate('/login');
//     } catch (error) {
//       console.error(error.response.data);
//       // handle error
//     }
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex w-full max-w-4xl shadow-md rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-third to-fourth w-1/2 flex justify-center items-center p-8">
//           <img src="./Humans.png" alt="human" className='w-full h-auto' />
//         </div>
//         <div className="bg-white w-1/2 p-8">
//           <h2 className="text-2xl font-bold mb-6">Daftar Sekarang</h2>
//           <form onSubmit={handleSignUp}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaLengkap">Nama Lengkap</label>
//               <input
//                 type="text"
//                 id="namaLengkap"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 placeholder="Masukkan nama kamu"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
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
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Konfirmasi kata sandi kamu"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm">
//                 <input type="checkbox" className="mr-2 leading-tight" />
//                 Setuju dengan <a href="#" className="text-blue-500 hover:underline">Syarat & Ketentuan</a>
//               </label>
//             </div>
//             <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Daftar</button>
//           </form>
//           <div className="mt-6 flex justify-between items-center">
//             <button className="bg-red-500 text-white py-2 px-4 rounded flex-1 mr-2">Daftar dengan Google</button>
//             <button className="bg-black text-white py-2 px-4 rounded flex-1 ml-2">Daftar dengan Apple</button>
//           </div>
//           <p className="mt-4 text-center text-sm">Sudah punya akun? <button onClick={handleLoginClick} className="text-blue-500 hover:underline">Masuk</button></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormSignUp;


import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/signup', { fullName, email, password });
      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
