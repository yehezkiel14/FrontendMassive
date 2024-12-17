import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditAkun() {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    profilePicture: '',
    phoneNumber: '',
    address: '',
    education: '',
    aboutMe: '',
    skills: '',
    organizationalExperience: '',
    awardsAndCertificates: '',
  });
  const navigate = useNavigate();

  // Fetch user data after login
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/auth/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
        }
      });
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/updateProfile', {  // Update with your actual API endpoint
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert('Profile updated successfully');
      navigate('/akun');
    } else {
      alert('Error updating profile');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData({ ...userData, profilePicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">Edit Biodata</h2>
        <form onSubmit={handleSubmit}>
          <div className="bg-gradient-to-r from-third to-fourth p-6 rounded-lg text-white flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img src={userData.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
              <input type="file" onChange={handleImageUpload} className="bg-white text-green-600 px-4 py-1 rounded-md mt-2 text-sm" />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-bold">Nama Lengkap</p>
                  <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                </div>
                <div>
                  <p className="font-bold">Alamat</p>
                  <input type="text" name="address" value={userData.address} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                </div>
                <div>
                  <p className="font-bold">No Telepon</p>
                  <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                </div>
                <div>
                  <p className="font-bold">Pendidikan Terakhir</p>
                  <input type="text" name="education" value={userData.education} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <input type="email" name="email" value={userData.email} className="w-full p-2 mb-4 border rounded" readOnly />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center text-2xl font-semibold mt-10 mb-6">Informasi Tambahan</h2>
          <div className="bg-gradient-to-r from-third to-fourth p-6 rounded-lg text-white">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">TENTANG SAYA</h3>
                <textarea name="aboutMe" value={userData.aboutMe} onChange={handleChange} className="w-full p-2 mb-4 border rounded"></textarea>
              </div>
              <div>
                <h3 className="font-bold text-lg">KEMAMPUAN</h3>
                <textarea name="skills" value={userData.skills} onChange={handleChange} className="w-full p-2 mb-4 border rounded"></textarea>
              </div>
              <div>
                <h3 className="font-bold text-lg">PENGALAMAN ORGANISASI</h3>
                <textarea name="organizationalExperience" value={userData.organizationalExperience} onChange={handleChange} className="w-full p-2 mb-4 border rounded"></textarea>
              </div>
              <div>
                <h3 className="font-bold text-lg">PENGHARGAAN & SERTIFIKAT</h3>
                <textarea name="awardsAndCertificates" value={userData.awardsAndCertificates} onChange={handleChange} className="w-full p-2 mb-4 border rounded"></textarea>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAkun;
