import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './layouts/Pagination';
import Comp1 from '../assets/comp1.jpeg';
import Comp2 from '../assets/comp2.png';
import Comp3 from '../assets/comp3.png';
import Comp4 from '../assets/comp4.png';
import Comp5 from '../assets/comp5.png';
import Comp6 from '../assets/comp6.png';
import Comp7 from '../assets/comp7.png';
import Comp8 from '../assets/comp8.jpeg';
import Comp9 from '../assets/comp9.jpeg';



const jobs = [
  {
    id: 1,
    title: "Supervisor Lapangan",
    location: "Bandung",
    salary: "4 - 7 Juta",
    description: "Posisi ini membutuhkan kemampuan komunikasi dan pemahaman mendalam tentang operasional pertanian.",
    tags: ["#pertanian", "#supervisor"],
    logo: Comp1
  },
  {
    id: 2,
    title: "Teknisi Alat Pertanian",
    location: "Jakarta",
    salary: "2 - 2,5 Juta",
    description: "Bertanggung jawab untuk merawat dan memperbaiki peralatan modern di pertanian.",
    tags: ["#pertanian", "#teknisi"],
    logo: Comp2
  },
  {
    id: 3,
    title: "Analis Tanah dan Tanaman",
    location: "Surabaya",
    salary: "2 - 3 Juta",
    description: "Menguji kesuburan tanah dan memberikan rekomendasi pemupukan yang tepat.",
    tags: ["#analis", "#kesuburantanah"],
    logo: Comp3
  },
  {
    id: 4,
    title: "Asisten Manajer Kebun",
    location: "Lampung",
    salary: "3 - 3,5 Juta",
    description: "Bantu mengelola kebun dengan sistem yang efisien",
    tags: ["#kebun", "#manajemen"],
    logo: Comp4
  },
  {
    id: 5,
    title: "Penyuluh Pertanian",
    location: "Yogyakarta",
    salary: "2 - 2,5 Juta",
    description: "Berperanlah sebagai Penyuluh Pertanian dan bantu petani lokal untuk memahami teknik terbaru dalam bertani.",
    tags: ["#pertanian", "#penyuluhan"],
    logo: Comp5
  },
  {
    id: 6,
    title: "Teknisi Sistem Irigasi",
    location: "Karawang",
    salary: "2 - 2,5 Juta",
    description: "Posisi ini ideal bagi Anda yang memiliki keterampilan teknis dalam sistem irigasi.",
    tags: ["#pertanian", "#teknisi"],
    logo: Comp6
  },
  {
    id: 7,
    title: "Pengelola Gudang Hasil Panen",
    location: "Makassar",
    salary: "2 - 2,5 Juta",
    description: "Mengelola hasil panen dengan sistem yang efisien dan terstruktur",
    tags: ["#pengelola", "#manajemen"],
    logo: Comp7
  },
  {
    id: 8,
    title: "Ahli Pupuk & Nutrisi Tanaman",
    location: "Semarang",
    salary: "2 - 2,5 Juta",
    description: "Ideal bagi Anda yang memiliki latar belakang di bidang agronomi atau nutrisi tanaman.",
    tags: ["#ahlipupuk", "#manajemen"],
    logo: Comp8
  },
  {
    id: 9,
    title: "Operator Alat Berat Pertanian",
    location: "Medan",
    salary: "2 - 2,5 Juta",
    description: "Ahli dalam mengoperasikan alat berat untuk kegiatan pertanian, seperti traktor dan mesin pemanen.",
    tags: ["#pertanian", "#operator"],
    logo: Comp9
  },
  
];


const JobCard = ({ job }) => (
  <div className="border rounded-lg p-4 shadow-md flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-lg font-bold">{job.title}</div>
          <div className="text-gray-600">{job.location}</div>
          <div className="text-yellow-500">{job.salary}</div>
        </div>
        <img src={job.logo} alt={`${job.title} logo`} className="w-16 h-16 object-contain"/>
      </div>
      <div className="text-gray-800 mt-2">{job.description}</div>
      <div className="flex space-x-2 mt-2">
        {job.tags && job.tags.map(tag => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
    <div className='flex justify-center mt-4'>
      <Link to={`/pekerjaan/detail/${job.id}`} className="bg-yellow-500 text-white transition duration-300 ease-in-out hover:bg-yellow-950 py-2 px-4 rounded-full text-center">Daftar</Link>
    </div>
  </div>
);



const JobList = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const currentJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentJobs.map(job => (
          <JobCard key={job.title} job={job} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default JobList;
