import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const initialArtikelDetails = {
  1: {
    id: 1,
    title: 'Budidaya Padi Organik',
    description: '7 Tahap Sukses Membudidayakan Padi Organik',
    content: 'Detail lengkap tentang bagaimana membudidayakan padi organik, termasuk persiapan lahan, penanaman, pemeliharaan, dan panen.',
    image: '../assets/a1.png',
  },
  2: {
    id: 2,
    title: 'Teknologi IoT di Pertanian',
    description: 'Manfaat dan aplikasi IoT untuk memantau dan meningkatkan produktivitas lahan.',
    content: 'Artikel ini menjelaskan manfaat teknologi IoT di bidang pertanian, termasuk contoh aplikasi yang dapat digunakan untuk meningkatkan efisiensi dan produktivitas pertanian.',
    image: '../assets/iot-dalam-pertanian.png',
  },
  3: {
    id: 3,
    title: 'Hidroponik di rumah',
    description: 'Teknik hidroponik sederhana yang cocok untuk lahan terbatas di perkotaan.',
    content: 'Panduan praktis untuk memulai bercocok tanam dengan teknik hidroponik di rumah. Cocok untuk Anda yang tinggal di perkotaan dengan lahan terbatas.',
    image: '../assets/pexels.png',
  },
  4: {
    id: 4,
    title: 'Tabulampot buah tropis',
    description: 'Cara menanam buah dalam pot untuk kebun minimalis Anda.',
    content: 'Panduan menanam buah-buahan tropis dalam pot yang dapat menghemat ruang dan cocok untuk kebun minimalis di rumah Anda.',
    image: '../assets/tabulampot.png',
  },
};

const EditArtikel = ({ artikelDetails = initialArtikelDetails, setArtikelDetails }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artikel = artikelDetails[id];
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: ''
  });

  useEffect(() => {
    if (artikel) {
      setFormData(artikel);
    }
  }, [artikel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArtikelDetails({
      ...artikelDetails,
      [id]: formData,
    });
    navigate(`/detailartikel/${id}`);
  };

  if (!artikel) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
      </form>
    </div>
  );
};

export default EditArtikel;
