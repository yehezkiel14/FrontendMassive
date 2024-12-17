import React from 'react';
import Youtube from '../assets/youtube.svg';
import { Link } from 'react-router-dom';

const VideoThumbnail = ({ imageUrl, videoUrl, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img className="w-full object-cover" src={imageUrl} alt={title} />
      <div className="py-2">
        <Link to={videoUrl} className="font-bold text-xl text-black flex justify-between items-center">
          <img src={Youtube} alt="youtube" className='w-10 h-10 mx-1'/>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default VideoThumbnail;
