import React from 'react';
import EbookList from './EbookList';
import Selengkapnya from './elements/button/Selengkapnya';

const Ebook = () => {
  return (
    <div>
      <div className="p-6 max-w-6xl mx-auto bg-gradient-to-r from-third to-fourth rounded-xl space-y-4 mt-10">
        <EbookList />
      </div>
      {/* <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">E-Book</h1>
      <p className="text-center">
        Selamat datang di koleksi e-book pertanian kami! Dapatkan pengetahuan mendalam dan keterampilan praktis di bidang pertanian dari e-book pilihan yang mencakup berbagai topik. Pilih e-book terbaru kami atau telusuri seluruh koleksi untuk menemukan panduan yang sesuai dengan kebutuhan Anda. Mari bersama-sama memperkuat masa depan pertanian!
      </p> */}
      <div className="text-center mb-6">
        <Selengkapnya />
      </div>
    </div>
  );
};

export default Ebook;
