import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import VideoGambar from '../assets/v1.png'
import VideoGambar2 from '../assets/v2.png'
import VideoGambar3 from '../assets/v3.png'
import VideoGambar4 from '../assets/v4.png'
import VideoGambar5 from '../assets/v5.png'
import VideoGambar6 from '../assets/v6.png'
import VideoGambar7 from '../assets/v7.png'
import VideoGambar8 from '../assets/v8.png'

const VideoCard = () => {
  const videos = [
    {
      imageUrl: VideoGambar,
      videoUrl: 'https://www.youtube.com/watch?v=sji_ycDtsFc',
      title: 'Rahasia Sukses Menjadi Petani Jaman Now'
    },
    {
      imageUrl: VideoGambar2,
      videoUrl: 'https://www.youtube.com/watch?v=67EPXSP99aI&t=1s',
      title: 'Inspirasi Milenial Sukses Bertani Melon Secara Modern'
    },
    {
        imageUrl: VideoGambar3,
        videoUrl: 'https://www.youtube.com/watch?v=aPZkFz48WpI',
        title: 'Budidaya Melon Hydroponik Dengan Teknologi Ala Petani Milenial'
    },
    {
        imageUrl: VideoGambar4,
        videoUrl: 'https://www.youtube.com/watch?v=67EPXSP99aI&t=1s',
        title: 'Inspirasi Milenial Sukses Bertani Melon Secara Modern'
    },
    {
        imageUrl: VideoGambar5,
        videoUrl: 'https://www.youtube.com/watch?v=oYYRgc75b_A',
        title: 'Smart Irrigation Farming Murah & Hemat Biaya Produksi'
    },
    {
      imageUrl: VideoGambar6,
      videoUrl: 'https://www.youtube.com/watch?v=BpOvgxrpByk',
      title: 'Cara Membuat Sprayer/Semprotan Elektrik Sendiri'
    },
    {
      imageUrl: VideoGambar7,
      videoUrl: 'https://www.youtube.com/watch?v=mLdvwruqEpo',
      title: 'Menanam Sayuran di Rumah Lahan Sempit - Kangkung Hidroponik'
    },
    {
      imageUrl: VideoGambar8,
      videoUrl: 'https://www.youtube.com/watch?v=BpIhyzguCog',
      title: 'Irigasi Cerdas Berbasis Internet of Things'
    }
    
  ];

  return (
    <div className="mx-auto mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoThumbnail key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
