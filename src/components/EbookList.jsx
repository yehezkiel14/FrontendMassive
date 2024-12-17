import React from 'react';
import EbookItem from './EbookItem';
import EbookSatu from '../assets/ebook1.png';
import EbookDua from '../assets/ebook2.png';
import EbookTiga from '../assets/ebook3.png';
import EbookEmpat from '../assets/ebook4.png';
import EbookLima from '../assets/ebook5.png';
import EbookEnam from '../assets/ebook6.png';
import EbookTujuh from '../assets/ebook7.png';

const ebookData = [
  {
    id: 1,
    image: EbookSatu,
    title: 'Bertanam Hidroponik untuk Pemula',
    description: '',
  },
  {
    id: 2,
    image: EbookDua,
    title: 'Teknologi Pertanian Masa Kini',
    description: '',
  },
  {
    id: 3,
    image: EbookTiga,
    title: 'Bertani di Lahan Sempit',
    description: '',
  },
  {
    id: 4,
    image: EbookEmpat,
    title: 'Nutrisi Tanaman',
    description: 'Buku ini membahas berbagai nutrisi penting yang diperlukan tanaman untuk tumbuh optimal. Cocok bagi Anda yang ingin mengetahui cara memberikan perawatan terbaik untuk tanaman.',
  },
  {
    id: 5,
    image: EbookLima,
    title: 'Hidroponik Rumahan',
    description: 'Pelajari cara menanam hidroponik di rumah secara sederhana namun efektif. Buku ini memuat langkah-langkah praktis dan bahan yang dibutuhkan untuk menumbuhkan tanaman sehat di rumah.',
  },
  {
    id: 6,
    image: EbookEnam,
    title: 'Cepat & Tepat Berantas Hama & Penyakit Tanaman',
    description: 'E-book ini memberikan panduan untuk mengidentifikasi dan mengatasi hama serta penyakit tanaman secara efektif, sehingga hasil panen tetap maksimal.',
  },
  {
    id: 7,
    image: EbookTujuh,
    title: 'Pertanian dan Masa Depan',
    description: 'Bagaimana pertanian beradaptasi dengan perubahan zaman, terutama dalam menghadapi tantangan global seperti perubahan iklim dan ketahanan pangan di masa depan.',
  },
];

const EbookList = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {ebookData.map((ebook, index) => (
        <EbookItem key={index} image={ebook.image} title={ebook.title} description={ebook.description} />
      ))}
    </div>
  );
};

export default EbookList;
