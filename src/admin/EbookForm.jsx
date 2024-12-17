// import React, { useState } from 'react';
// import axios from 'axios';

// const EbookForm = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('author', author);
//     formData.append('description', description);
//     formData.append('file', file);

//     await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/ebooks`, formData);
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-2">Tambah Ebook</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           placeholder="Judul"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           placeholder="Penulis"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <textarea
//           className="w-full p-2 border rounded"
//           placeholder="Deskripsi"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="file"
//           className="w-full p-2"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default EbookForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Install axios: npm install axios

function EbooksForm() {
  const [ebooks, setEbooks] = useState([]);
  const [newEbook, setNewEbook] = useState({ Title: '', Author: '', Description: '', FilePath: null });

  useEffect(() => {
    fetchEbooks();
  }, []);

  const fetchEbooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/ebooks');
      setEbooks(res.data);
    } catch (error) {
      console.error('Error fetching ebooks:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEbook({ ...newEbook, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewEbook({ ...newEbook, FilePath: e.target.files[0] });
  };

  const addEbook = async () => {
    try {
      const formData = new FormData();
      formData.append('Title', newEbook.Title);
      formData.append('Author', newEbook.Author);
      formData.append('Description', newEbook.Description);
      formData.append('FilePath', newEbook.FilePath);

      await axios.post('http://localhost:5000/ebooks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchEbooks();
      setNewEbook({ Title: '', Author: '', Description: '', FilePath: null });
    } catch (error) {
      console.error('Error adding ebook:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ebooks</h1>

      {/* Form untuk menambahkan ebook */}
      <div className="mb-4">
        <input
          type="text"
          name="Title"
          placeholder="Title"
          className="border border-gray-400 p-2 mr-2"
          value={newEbook.Title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Author"
          placeholder="Author"
          className="border border-gray-400 p-2 mr-2"
          value={newEbook.Author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
          className="border border-gray-400 p-2 mr-2"
          value={newEbook.Description}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="FilePath"
          className="border border-gray-400 p-2 mr-2"
          onChange={handleFileChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addEbook}
        >
          Add Ebook
        </button>
      </div>

      {/* Tabel untuk menampilkan ebooks */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">File Path</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ebooks.map((ebook) => (
            <tr key={ebook.EbookID}>
              <td className="border px-4 py-2">{ebook.Title}</td>
              <td className="border px-4 py-2">{ebook.Author}</td>
              <td className="border px-4 py-2">{ebook.Description}</td>
              <td className="border px-4 py-2">{ebook.FilePath}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EbooksForm;