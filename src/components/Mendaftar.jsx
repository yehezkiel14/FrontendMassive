import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const jobs = [
    {
      id: 1,
      title: "Supervisor Lapangan",
      location: "Bandung",
      salary: "4 - 7 Juta",
      description: "Posisi ini membutuhkan kemampuan komunikasi dan pemahaman mendalam tentang operasional pertanian.",
      tags: ["#pertanian", "#supervisor"],
      logo: "logo1.png",
      requirements: [
        "Gelar sarjana di bidang Pertanian.",
        "Minimal 3 tahun pengalaman di bidang terkait.",
        "Kemampuan komunikasi yang baik.",
        "Keterampilan kepemimpinan yang kuat.",
        "Mampu bekerja di bawah tekanan.",
        "Memiliki pengetahuan tentang praktik pertanian modern.",
        "Mampu mengelola tim dan sumber daya.",
        "Memahami regulasi dan kebijakan pertanian.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 2,
      title: "Teknisi Alat Pertanian",
      location: "Jakarta",
      salary: "2 - 2,5 Juta",
      description: "Bertanggung jawab untuk merawat dan memperbaiki peralatan modern di pertanian.",
      tags: ["#pertanian", "#teknisi"],
      logo: "logo2.png",
      requirements: [
        "Diploma di bidang Teknik Mesin atau terkait.",
        "Pengalaman minimal 2 tahun di bidang teknisi alat pertanian.",
        "Kemampuan analisa dan pemecahan masalah.",
        "Mampu bekerja secara mandiri dan dalam tim.",
        "Memiliki pengetahuan tentang mesin pertanian.",
        "Kemampuan memperbaiki dan merawat peralatan.",
        "Keterampilan teknis yang baik.",
        "Memahami keselamatan kerja.",
        "Bersedia bekerja di lokasi pertanian."
      ]
    },
    {
      id: 3,
      title: "Analis Tanah dan Tanaman",
      location: "Surabaya",
      salary: "2 - 3 Juta",
      description: "Menguji kesuburan tanah dan memberikan rekomendasi pemupukan yang tepat.",
      tags: ["#analis", "#kesuburantanah"],
      logo: "logo3.png",
      requirements: [
        "Gelar sarjana di bidang Agronomi atau terkait.",
        "Pengalaman dalam analisis tanah.",
        "Kemampuan menginterpretasi hasil analisis.",
        "Pengetahuan tentang nutrisi tanaman.",
        "Kemampuan komunikasi yang baik.",
        "Keterampilan analitis yang kuat.",
        "Memahami teknologi pertanian.",
        "Detail-oriented.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 4,
      title: "Asisten Manajer Kebun",
      location: "Lampung",
      salary: "3 - 3,5 Juta",
      description: "Bantu mengelola kebun dengan sistem yang efisien.",
      tags: ["#kebun", "#manajemen"],
      logo: "logo4.png",
      requirements: [
        "Gelar sarjana di bidang Pertanian atau terkait.",
        "Pengalaman dalam manajemen kebun.",
        "Kemampuan kepemimpinan yang baik.",
        "Keterampilan organisasi yang baik.",
        "Mampu bekerja di bawah tekanan.",
        "Kemampuan komunikasi yang baik.",
        "Memahami teknologi pertanian.",
        "Pengetahuan tentang praktik pertanian.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 5,
      title: "Penyuluh Pertanian",
      location: "Yogyakarta",
      salary: "2 - 2,5 Juta",
      description: "Berperanlah sebagai Penyuluh Pertanian dan bantu petani lokal untuk memahami teknik terbaru dalam bertani.",
      tags: ["#pertanian", "#penyuluhan"],
      logo: "logo5.png",
      requirements: [
        "Gelar sarjana di bidang Pertanian.",
        "Pengalaman dalam penyuluhan pertanian.",
        "Kemampuan komunikasi yang baik.",
        "Keterampilan presentasi yang baik.",
        "Memahami teknologi pertanian.",
        "Pengetahuan tentang praktik pertanian.",
        "Kemampuan bekerja dengan komunitas.",
        "Detail-oriented.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 6,
      title: "Teknisi Sistem Irigasi",
      location: "Karawang",
      salary: "2 - 2,5 Juta",
      description: "Posisi ini ideal bagi Anda yang memiliki keterampilan teknis dalam sistem irigasi.",
      tags: ["#pertanian", "#teknisi"],
      logo: "logo6.png",
      requirements: [
        "Diploma di bidang Teknik Sipil atau terkait.",
        "Pengalaman dalam sistem irigasi.",
        "Kemampuan analisa dan pemecahan masalah.",
        "Kemampuan teknis yang baik.",
        "Memahami teknologi irigasi.",
        "Kemampuan komunikasi yang baik.",
        "Mampu bekerja secara mandiri dan dalam tim.",
        "Detail-oriented.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 7,
      title: "Pengelola Gudang Hasil Panen",
      location: "Makassar",
      salary: "2 - 2,5 Juta",
      description: "Mengelola hasil panen dengan sistem yang efisien dan terstruktur.",
      tags: ["#pengelola", "#manajemen"],
      logo: "logo7.png",
      requirements: [
        "Diploma di bidang Manajemen atau terkait.",
        "Pengalaman dalam pengelolaan gudang.",
        "Kemampuan organisasi yang baik.",
        "Keterampilan manajemen yang baik.",
        "Kemampuan komunikasi yang baik.",
        "Detail-oriented.",
        "Memahami teknologi pengelolaan gudang.",
        "Kemampuan analisa yang baik.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 8,
      title: "Ahli Pupuk & Nutrisi Tanaman",
      location: "Semarang",
      salary: "2 - 2,5 Juta",
      description: "Ideal bagi Anda yang memiliki latar belakang di bidang agronomi atau nutrisi tanaman.",
      tags: ["#ahlipupuk", "#manajemen"],
      logo: "logo8.png",
      requirements: [
        "Gelar sarjana di bidang Agronomi atau terkait.",
        "Pengalaman dalam nutrisi tanaman.",
        "Kemampuan analisa yang baik.",
        "Pengetahuan tentang teknologi pupuk.",
        "Kemampuan komunikasi yang baik.",
        "Keterampilan presentasi yang baik.",
        "Memahami praktik pertanian.",
        "Detail-oriented.",
        "Bersedia bekerja di lapangan."
      ]
    },
    {
      id: 9,
      title: "Operator Alat Berat Pertanian",
      location: "Medan",
      salary: "2 - 2,5 Juta",
      description: "Ahli dalam mengoperasikan alat berat untuk kegiatan pertanian, seperti traktor dan mesin pemanen.",
      tags: ["#pertanian", "#operator"],
      logo: "logo9.png",
      requirements: [
        "Diploma di bidang Teknik Mesin atau terkait.",
        "Pengalaman dalam mengoperasikan alat berat.",
        "Kemampuan teknis yang baik.",
        "Memahami teknologi alat berat.",
        "Kemampuan analisa dan pemecahan masalah.",
        "Kemampuan komunikasi yang baik.",
        "Mampu bekerja secara mandiri dan dalam tim.",
        "Detail-oriented.",
        "Bersedia bekerja di lapangan."
      ]
    },
  ];

const Mendaftar = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));
  const [cv, setCv] = useState(null);
  const [notes, setNotes] = useState('');

  const handleCvUpload = (event) => {
    setCv(event.target.files[0]);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cv || !notes) {
      // Menampilkan pesan peringatan menggunakan SweetAlert2 jika input belum diisi
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Harap mengisi semua field sebelum mengirim lamaran!',
      });
      return;
    }

    // Proses pengiriman formulir
    console.log('Pekerjaan ID:', id);
    console.log('CV:', cv);
    console.log('Notes:', notes);

    // Menampilkan pesan sukses menggunakan SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Lamaran Anda telah berhasil dikirim!',
    });
  };

  if (!job) {
    return <div>Pekerjaan tidak ditemukan</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-y-4 flex h-screen overflow-hidden">
      <div className="w-1/3 pr-6 h-full overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Detail Pekerjaan</h2>
        <div className="border rounded-lg p-4 shadow-md">
          <img src={job.logo} alt={`${job.title} logo`} className="w-16 h-16 object-contain mb-2"/>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
          <p className="text-gray-600">{job.location}</p>
          <p className="text-yellow-500">{job.salary}</p>
          <p className="text-gray-800 mt-2">{job.description}</p>
          <div className="flex space-x-2 mt-2">
            {job.tags && job.tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Kualifikasi:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800 mt-2">
              {job.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-2/3 pl-6 border-l h-full overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mendaftar Pekerjaan</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
              Upload CV
            </label>
            <input
              type="file"
              id="cv"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleCvUpload}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
              Catatan
            </label>
            <textarea
              id="notes"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-yellow-700"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mendaftar;
