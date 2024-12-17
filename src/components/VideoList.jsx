import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard'; 
import { Link } from 'react-router-dom';
import GambarSatu from '../assets/v1.png';

const VideoList = () => {
    const videos = [
        {
          title: 'Rahasia Sukses Menjadi Petani Jaman Now',
          thumbnail: GambarSatu,
          url: 'https://www.youtube.com/watch?v=sji_ycDtsFc',
        },
        {
          title: 'Inspirasi Milenial Sukses Bertani Melon Secara Modern',
          thumbnail: 'https://i.ibb.co/d6D3Q9G/Bertani-Melon-Modern.png',
          url: '/video/bertani-melon-modern',
        },
        {
          title: 'PERTANIAN MODERN !!! Budidaya Melon Hydroponik Dengan Teknologi Ala Petani Milenial | Ep 113',
          thumbnail: 'https://i.ibb.co/pW304R6/Budidaya-Melon-Hydroponik.png',
          url: '/video/budidaya-melon-hydroponik',
        },
        {
          title: 'Cara Membuat Tempat Menanam Hidroponik Dari Pipa Paralon PVC',
          thumbnail: 'https://i.ibb.co/gD1d9cW/Membuat-Hidroponik.png',
          url: '/video/membuat-hidroponik',
        },
        {
          title: 'Smart Irrigation Farming Murah & Hemat Biaya Produksi',
          thumbnail: 'https://i.ibb.co/sJ6D7r1/Smart-Irrigation-Farming.png',
          url: '/video/smart-irrigation-farming',
        },
        {
          title: 'Cara Membuat Sprayer/Semprotan Elektrik Sendiri',
          thumbnail: 'https://i.ibb.co/4gH7z9T/Sprayer-Elektrik.png',
          url: '/video/sprayer-elektrik',
        },
      ];

  return (
    <div className="video-list">
      {videos.map((video) => (
        <Link to={video.url} key={video.title}>
          <div className="video-card">
          <div className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <h3 className="video-title">{video.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;