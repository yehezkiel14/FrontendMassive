import React, { useState } from 'react';
import axios from 'axios';

const VideoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoData = { title, description, url };

    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/videos`, videoData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Tambah Video Pembelajaran</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="url"
          className="w-full p-2 border rounded"
          placeholder="URL Video"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default VideoForm;
