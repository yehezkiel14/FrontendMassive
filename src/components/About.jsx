import React, { useRef } from 'react';

const About = () => {
  const teamRef = useRef(null);

  // Scrolls the team section left or right by a certain distance
  const scroll = (direction) => {
    if (teamRef.current) {
      const scrollAmount = teamRef.current.clientWidth;
      teamRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  // Define team roles and corresponding images
  const teamMembers = [
    { role: "Project Manager", img: "./dessy.jpg" },
    { role: "Hipster", img: "./FAJAR.png" },
    { role: "Hipster", img: "./images/hipster2.png" },
    { role: "Hipster", img: "./images/hipster3.png" },
    { role: "Hipster", img: "./images/hipster4.png" },
    { role: "Hipster", img: "./images/hipster5.png" },
    { role: "Hipster", img: "./images/hipster6.png" },
    { role: "Hipster", img: "./images/hipster7.png" },
    { role: "Hacker", img: "./kiel.png" },
    { role: "Hacker", img: "./images/hacker2.png" },
    { role: "Hacker", img: "./marcel.jpg" },
    { role: "Hacker", img: "./age.png" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Header Image */}
      <div className="w-full relative">
        <img 
          src="./tentangkami.png" 
          alt="Farmers working in a field" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto p-8 text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">Tentang AgriFuture</h2>
        <p className="text-lg mb-4">
          AgriFuture adalah platform inovatif yang didedikasikan untuk meningkatkan pengetahuan dan keterampilan di bidang pertanian modern. Kami percaya bahwa pertanian adalah kunci keberlanjutan pangan dan kesejahteraan masyarakat. Oleh karena itu, kami menyediakan berbagai sumber daya edukasi, dan lowongan pekerjaan di bidang pertanian.
        </p>
        <p className="text-lg">
          Kami juga bekerja sama dengan perusahaan-perusahaan terkemuka untuk menawarkan peluang karir yang eksklusif, menghubungkan pengguna dengan lowongan pekerjaan yang relevan di sektor agrikultur. Melalui komunitas yang aktif, AgriFuture memungkinkan para petani, mahasiswa, dan profesional untuk berdiskusi, bertukar pengalaman, dan membangun jaringan yang bermanfaat.
        </p>
      </div>

      {/* Section for Visi & Misi */}
      <div className="w-[75rem] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <img src="./visi.png" alt="Visi Icon" className="w-12 h-12"/>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">Visi</h3>
          <p className="text-lg text-center">
            Menjadi platform terdepan yang memajukan pertanian modern melalui edukasi, teknologi, dan peluang karir, guna menciptakan masa depan agrikultur yang berkelanjutan dan berdaya saing.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <img src="./misi.png" alt="Misi Icon" className="w-12 h-12"/>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">Misi</h3>
          <ol className="text-lg list-decimal list-inside">
            <li>Memberikan edukasi mengenai pertanian modern</li>
            <li>Memberdayakan SDM pertanian</li>
            <li>Menghubungkan talenta dengan peluang karir</li>
            <li>Membangun komunitas yang kolaboratif</li>
            <li>Mendorong inovasi berkelanjutan</li>
          </ol>
        </div>
      </div>

      {/* Team Section with 12 Unique Cards */}
      <div className="relative w-full mt-12 overflow-hidden mb-20 bg-gradient-to-t from-secondary to bg-third"> {/* Adjusted margin-bottom for spacing */}
        <h2 className="text-3xl font-bold text-center my-8">Tim AgriFuture</h2>
        
        {/* Scroll buttons */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-700 text-white rounded-full p-3">
          ❮
        </button>
        
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-700 text-white rounded-full p-3">
          ❯
        </button>

        {/* Team cards */}
        <div 
          ref={teamRef} 
          className="flex gap-6 p-4 w-full scroll-smooth px-20 overflow-hidden"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0 w-60 bg-white rounded-lg shadow-lg text-center p-4 mx-2">
              <img 
                src={member.img} 
                alt="Team Member" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Nama Lengkap</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default About;
