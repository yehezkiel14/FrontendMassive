import React, { useEffect } from 'react';
import Edukasi from "../assets/br1.png";
import SearchBar from './elements/input/Input';
import FormCard from './FormCard';
import Footer from './Footer';
import VideoCard from './VideoCards';
import Ebook from './Ebook';
import Selengkapnya from './elements/button/Selengkapnya';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EdukasiSatu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <div 
        className='w-[75rem] h-[28rem] mx-auto shrink-0 flex flex-col items-center justify-center rounded-lg animate-fade-in-right' 
        style={{
          backgroundImage: `url(${Edukasi})`, 
          backgroundColor: 'rgba(211, 211, 211, 0.5)', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center' 
        }}
        data-aos="fade-in-right"
      >
        <h1 className='w-1/2 text-5xl text-center text-white font-sans font-bold'>Mulai Explorasi Sekarang</h1>
        <p className='text-white text-lg font-normal w-[40rem] h-14 text-center mt-2'>Temukan berbagai sumber daya edukasi untuk memperdalam pemahaman anda tentang pertanian modern secara gratis!</p>
        <div className='flex mt-4 px-4'>
          <SearchBar />
        </div>
      </div>
      <section 
        className='w-[75rem] height-[28rem] mx-auto flex flex-col items-center justify-center mt-10 p-5 animate-fade-in-right' >
        <div className='flex flex-col items-center w-1/2'>
          <h2 className='font-bold text-5xl font-sans'>Artikel & Blog</h2>
          <p className='text-lg mt-3'>Jelajahi topik menarik seputar pertanian</p>
        </div>
        <div className='mt-10 inline-flex justify-center items-start gap-4'>
          <FormCard />
        </div>
      </section>
      
      <section className='bg-gradient-to-b from-primary to-secondary min-h-screen animate-fade-in-right' data-aos="fade-in-left">
        <div className='w-[75rem] height-[28rem] mx-auto flex flex-col items-center justify-center mt-10 p-5'>
          <div className='flex flex-col items-center w-1/2'>
            <h2 className='font-bold text-5xl font-sans'>Video</h2>
            <p className='text-lg mt-3'>Pelajari langsung melalui video edukatif</p>
          </div>
          <VideoCard />
        </div>
      </section>
      <section className='bg-gradient-to-b min-h-screen animate-fade-in-right' data-aos="fade-in-left">
        <div className='w-[75rem] height-[28rem] mx-auto flex flex-col items-center justify-center mt-10 p-5'>
          <div className='items-center '>
            <h2 className='font-bold text-5xl font-sans flex justify-center'>E-Book</h2>
            <p className='text-lg text-justify mt-3'>
              Selamat datang di koleksi e-book pertanian kami! Dapatkan pengetahuan mendalam dan keterampilan praktis di bidang pertanian dari e-book pilihan yang mencakup berbagai topik. Pilih e-book terbaru kami atau telusuri seluruh koleksi untuk menemukan panduan yang sesuai dengan kebutuhan Anda. Mari bersama-sama memperkuat masa depan pertanian!
            </p>
          </div>
          <Ebook />
        </div>
      </section>
      <footer className='animate-fade-in-right' data-aos="fade-in-left">
        <Footer />
      </footer>
    </div>
  );
};

export default EdukasiSatu;
