import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import GambarSatu from "../assets/a1.png";
import GambarDua from "../assets/iot-dalam-pertanian.png";
import GambarTiga from "../assets/pexels.png";
import GambarEmpat from "../assets/tabulampot.png";
import Selengkapnya from "./elements/button/Selengkapnya";

const artikelDetails = {
  1: {
    id: 1,
    title: 'Budidaya Padi Organik',
    description: 'Cara mudah memulai budidaya padi organik.',
    content: 'Detail lengkap tentang bagaimana membudidayakan padi organik, termasuk persiapan lahan, penanaman, pemeliharaan, dan panen.',
    image: GambarSatu,
  },
  2: {
    id: 2,
    title: 'Teknologi IoT di Pertanian',
    description: 'Manfaat dan aplikasi IoT untuk memantau dan meningkatkan produktivitas lahan.',
    content: 'Artikel ini menjelaskan manfaat teknologi IoT di bidang pertanian, termasuk contoh aplikasi yang dapat digunakan untuk meningkatkan efisiensi dan produktivitas pertanian.',
    image: GambarDua,
  },
  3: {
    id: 3,
    title: 'Hidroponik di rumah',
    description: 'Teknik hidroponik sederhana yang cocok untuk lahan terbatas di perkotaan.',
    content: 'Panduan praktis untuk memulai bercocok tanam dengan teknik hidroponik di rumah. Cocok untuk Anda yang tinggal di perkotaan dengan lahan terbatas.',
    image: GambarTiga,
  },
  4: {
    id: 4,
    title: 'Tabulampot buah tropis',
    description: 'Cara menanam buah dalam pot untuk kebun minimalis Anda.',
    content: 'Panduan menanam buah-buahan tropis dalam pot yang dapat menghemat ruang dan cocok untuk kebun minimalis di rumah Anda.',
    image: GambarEmpat,
  },
  5: {
    id: 5,
    title: 'Panggilan Bertani Generasi Milenial',
    description: '"Tidak ada petani kalian tidak makan" ungkapan para Petani.',
    content: 'Artikel ini menjelaskan pentingnya bertani untuk generasi milenial dalam menjaga ketahanan pangan.',
    image: GambarSatu,
  },
  6: {
    id: 6,
    title: 'Lebih Enak Jadi Petani daripada kerja kantoran?',
    description: 'Kalau jadi petani juga berat menanggung beban.',
    content: 'Artikel ini membahas perbandingan antara bekerja sebagai petani dan bekerja kantoran.',
    image: GambarSatu,
  },
};

const DetailArtikel = () => {
  const { id } = useParams();
  const artikel = artikelDetails[id];

  if (!artikel) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img src={artikel.image} alt={artikel.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{artikel.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{artikel.description}</p>
      <p className="text-base text-gray-600 mb-4">{artikel.content}</p>
      <Link to={`/edit/${id}`} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Edit Artikel</Link>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Artikel Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(artikelDetails).map((key) => (
            key !== id && (
              <div key={key}>
                <Card {...artikelDetails[key]} />
                <Selengkapnya />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailArtikel;
