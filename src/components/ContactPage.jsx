// ContactPage.js
import React from 'react';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="relative w-full bg-green-100 py-12"> {/* Background untuk informasi kontak */}
            <div className=" text-black text-center py-8">
              <h1 className="text-3xl font-bold">Kontak Kami</h1>
              <p className="mt-2">Ingin tahu lebih lanjut tentang AgFuture atau butuh bantuan? Hubungi tim kami! Kami siap membantu Anda dalam perjalanan belajar dan berkarir di dunia pertanian modern.</p>
            </div>
          <img 
            src="./tentangkami.png" 
            alt="Farmers working in a field" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="flex justify-center relative z-10">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-200 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Informasi Kontak</h2>
                  <p className="mb-2">Halo, ada yang bisa kami bantu?</p>
                  <p className="mb-2">📞 0812-1760-7645</p>
                  <p className="mb-2">📧 agri.future@gmail.com</p>
                  <p className="mb-2">📍 Batam, Kepulauan Riau</p>
                  <p className="mb-2">📱 @agfutureofficial_</p>
                </div>
                <div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Nama Depan" className="border p-2 rounded" />
                      <input type="text" placeholder="Nama Belakang" className="border p-2 rounded" />
                    </div>
                    <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
                    <input type="tel" placeholder="Nomor Telepon" className="border p-2 rounded w-full" />
                    <textarea placeholder="Tulis pesan anda..." className="border p-2 rounded w-full h-32"></textarea>
                    <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">Kirim</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
