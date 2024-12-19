// const jobs = [
//   {
//     id: 1,
//     title: "Supervisor Lapangan",
//     location: "Bandung",
//     salary: "4 - 7 Juta",
//     description: "Posisi ini membutuhkan kemampuan komunikasi dan pemahaman mendalam tentang operasional pertanian.",
//     tags: ["#pertanian", "#supervisor"],
//     logo: "logo1.png"
//   },
//   {
//     id: 2,
//     title: "Teknisi Alat Pertanian",
//     location: "Jakarta",
//     salary: "2 - 2,5 Juta",
//     description: "Bertanggung jawab untuk merawat dan memperbaiki peralatan modern di pertanian.",
//     tags: ["#pertanian", "#teknisi"],
//     logo: "logo2.png"
//   },
//   {
//     id: 3,
//     title: "Analis Tanah dan Tanaman",
//     location: "Surabaya",
//     salary: "2 - 3 Juta",
//     description: "Menguji kesuburan tanah dan memberikan rekomendasi pemupukan yang tepat.",
//     tags: ["#analis", "#kesuburantanah"],
//     logo: "logo3.png"
//   },
//   {
//     id: 4,
//     title: "Asisten Manajer Kebun",
//     location: "Lampung",
//     salary: "3 - 3,5 Juta",
//     description: "Bantu mengelola kebun dengan sistem yang efisien",
//     tags: ["#kebun", "#manajemen"],
//     logo: "logo4.png"
//   },
//   {
//     id: 5,
//     title: "Penyuluh Pertanian",
//     location: "Yogyakarta",
//     salary: "2 - 2,5 Juta",
//     description: "Berperanlah sebagai Penyuluh Pertanian dan bantu petani lokal untuk memahami teknik terbaru dalam bertani.",
//     tags: ["#pertanian", "#penyuluhan"],
//     logo: "logo5.png"
//   },
//   {
//     id: 6,
//     title: "Teknisi Sistem Irigasi",
//     location: "Karawang",
//     salary: "2 - 2,5 Juta",
//     description: "Posisi ini ideal bagi Anda yang memiliki keterampilan teknis dalam sistem irigasi.",
//     tags: ["#pertanian", "#teknisi"],
//     logo: "logo6.png"
//   },
//   {
//     id: 7,
//     title: "Pengelola Gudang Hasil Panen",
//     location: "Makassar",
//     salary: "2 - 2,5 Juta",
//     description: "Mengelola hasil panen dengan sistem yang efisien dan terstruktur",
//     tags: ["#pengelola", "#manajemen"],
//     logo: "logo7.png"
//   },
//   {
//     id: 8,
//     title: "Ahli Pupuk & Nutrisi Tanaman",
//     location: "Semarang",
//     salary: "2 - 2,5 Juta",
//     description: "Ideal bagi Anda yang memiliki latar belakang di bidang agronomi atau nutrisi tanaman.",
//     tags: ["#ahlipupuk", "#manajemen"],
//     logo: "logo8.png"
//   },
//   {
//     id: 9,
//     title: "Operator Alat Berat Pertanian",
//     location: "Medan",
//     salary: "2 - 2,5 Juta",
//     description: "Ahli dalam mengoperasikan alat berat untuk kegiatan pertanian, seperti traktor dan mesin pemanen.",
//     tags: ["#pertanian", "#operator"],
//     logo: "logo9.png"
//   },
  
// ];

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


<section className="bg-white">
        <div className="w-[75rem] mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
              nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

              <p className="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
