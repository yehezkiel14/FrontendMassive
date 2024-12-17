import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Faq from "./section/Faq";


function LandingSatu() {
    return (
      <>
        <section className="relative bg-gradient-to-t from-primary to-secondary">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div
            className="flex justify-between px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            
            <div className=" max-w-xl ml-14 text-left ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find your

                <strong className="block font-extrabold text-yellow-700"> Forever Arture. </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Bangun Keahlian, Jelajahi Teknologi, dan Temukan Peluang Karir di Dunia Agrikultur Modern Bersama AgriFuture
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>
              </div>
            </div>
            <img src="/Coworkers.png" alt="pekerja" />
          </div>
        </section>
        
        {/* Mengapa Agrifuture */}
        <div className="flex flex-col items-center justify-center mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <div className="flex flex-col items-center justify-center mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 className="mb-6 text-3xl font-bold">Kerjasama</h3>
                <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0 text-base md:text-lg lg:text-xl">
                    Kami bangga bermitra dengan berbagai perusahaan terkemuka yang berkomitmen untuk mendukung pertumbuhan talenta di sektor pertanian modern. Jadilah Bagian dari Jaringan Mitra Kami!
                </p>
            </div>

            <div className="grid gap-6 text-center md:grid-cols-2 lg:gap-12">
                <div className="mb-12 md:mb-0 flex justify-center">
                    <img src="./sreeya sewu.png" alt="logo1" className="mr-2" />
                    <img src="./pt liong.png" alt="logo2" className="ml-2" />
                    <img src="./Pt angkasa 1.png" alt="logo3" className="ml-2" />
                    <img src="./Berindo Jaya.png" alt="logo4" className="ml-2" />
                    <img src="./desain-gambar.png" alt="logo5" className="ml-2" />
                    <img src="./acc1.png" alt="logo6" className="ml-2" />
                </div>
            </div>

            <div className="w-[75rem] flex flex-col justify-center items-center mt-16">
              <div>
                <h2 className="text-3xl font-bold">Mengapa AgriFuture?</h2>
              </div>
              <div className="flex w-[75rem] mx-auto h-72 mt-10">
                <ul className="grid md:grid-cols-2 gap-8 md:gap-4">
                  <li className="bg-gradient-to-r from-third to-fourth rounded-2xl">
                    <div className="h-10">
                       <div className="flex mx-auto mt-4">
                        <img src="./Young_man.png" alt="man" className="w-32 h-20 mr-12 ml-2"/>
                        <div className="flex flex-col text-left">
                          <h3 className="text-xl font-bold text-white">Profesionalisme</h3>
                          <p className="text-lg text-white">AgriFuture memiliki tim profesional yang siap membantu Anda dalam mengembangkan potensi agrikultur modern.</p>
                        </div>
                       </div>
                    </div>
                  </li>
                  <li className="bg-gradient-to-r from-third to-fourth rounded-2xl">
                    <div className="h-10">
                       <div className="flex mx-auto mt-5">
                        <img src="./Team_management.png" alt="man" className="w-32 h-20 mr-5 ml-2"/>
                        <div className="flex flex-col text-left">
                          <h3 className="text-xl font-bold text-white">Info Lowongan Kerja</h3>
                          <p className="text-lg text-white mt-2">Membantu pengguna menemukan peluang karir di bidang pertanian.</p>
                        </div>
                       </div>
                    </div>
                  </li>
                  <li className="bg-gradient-to-r from-third to-fourth rounded-2xl">
                    <div className="h-10">
                       <div className="flex mx-auto mt-5">
                        <img src="./Young_people.png" alt="man" className="w-32 h-20 mr-5 ml-2"/>
                        <div className="flex flex-col text-left">
                          <h3 className="text-xl font-bold text-white">Komunitas Profesional Pertanian</h3>
                          <p className="text-lg text-white mt-2">Berdiskusi, berbagi pengalaman, dan mendapatkan solusi langsung dari mentor dan pengguna lain.</p>
                        </div>
                       </div>
                    </div>
                  </li>
                  <li className="bg-gradient-to-r from-third to-fourth rounded-2xl">
                    <div className="h-10">
                       <div className="flex mx-auto mt-5">
                        <img src="./Woman_working.png" alt="man" className="w-32 h-20 mr-5 ml-2"/>
                        <div className="flex flex-col text-left">
                          <h3 className="text-xl font-bold text-white">Akses ke Teknologi dan Inovasi Terbaru</h3>
                          <p className="text-lg text-white mt-2">AgriFuture selalu memperkenalkan perkembangan teknologi dan inovasi terkini di sektor pertanian.</p>
                        </div>
                       </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        {/* statistik */}
        <div >
          <div className="flex flex-col items-center justify-center mx-auto text-center md:max-w-xl lg:max-w-3xl mt-16">
            <h2 className="text-3xl font-bold">Statistik</h2>
            <h1 className="text-4xl font-bold mt-8">Kami Dalam Angka</h1>
            <div className="mt-6 md:mt-12">
              <div className="flex flex-col items-center justify-center mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0 text-base md:text-lg lg:text-xl">
                AgriFuture terus berkembang untuk mendukung generasi muda yang tertarik pada dunia pertanian.  Kami hadir untuk membantu anda mengeksplorasi potensi dalam sektor pertanian.
                </p>
              </div>
            </div>
            <div className="w-[75rem]">
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-6">
                <li className="bg-fourth rounded-2xl flex items-center justify-center">
                  <div className="h-40 w-56 flex flex-col items-center justify-center">
                    <img src="./smiley.png" alt="smile" className="w-10 h-10"/>
                    <h2 className="text-2xl text-center text-white font-bold ml-2">250+</h2>
                    <p className="text-lg font-bold text-white">Happy Customer</p>
                  </div>
                </li>
                <li className="bg-fourth rounded-2xl flex items-center justify-center">
                  <div className="h-40 w-56 flex flex-col items-center justify-center">
                    <img src="./files.png" alt="smile" className="w-10 h-10"/>
                    <h2 className="text-2xl text-center text-white font-bold ml-2">600+</h2>
                    <p className="text-lg font-bold text-white">Lamaran Pekerjaan</p>
                  </div>
                </li>
                <li className="bg-fourth rounded-2xl flex items-center justify-center">
                  <div className="h-40 w-56 flex flex-col items-center justify-center">
                    <img src="./users.png" alt="smile" className="w-10 h-10"/>
                    <h2 className="text-2xl text-center text-white font-bold ml-2">1k+</h2>
                    <p className="text-lg font-bold text-white">Pengguna Aktif</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div className="flex flex-col items-center justify-center mx-auto text-center md:max-w-xl lg:max-w-3xl mt-16">
            <h2 className="text-3xl font-bold">Diskusi Komunitas Populer</h2>
            <p className="mt-6 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0 text-base md:text-lg lg:text-xl">Dalam komunitas AgriFuture, para pengguna aktif berbagi pengetahuan, ide, dan pengalaman seputar inovasi pertanian. Dapatkan inspirasi dari diskusi-diskusi populer yang terus berkembang, dan perluas jaringan Anda dengan para ahli dan pemula yang memiliki minat sama di bidang ini.</p>
            <div>

            </div>
            <div>

            </div>
          </div>

        </div>

        {/*  */}
        <section className="bg-secondary min-h-screen flex items-center py-8">
          <div className="w-[75rem] flex flex-col items-center justify-center mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-6 text-3xl font-bold  text-white md:text-4xl">Simak Testimonial Dari Para Alumni
                AgriFuture
              </h3>
            </div>

            <div className="mx-auto grid gap-12 text-center md:grid-cols-2">
              
              <div className="bg-white shadow-md rounded-lg mb-6 md:mb-0 px-6 py-8">
                <div className="mb-6 flex justify-center ">
                  <img
                    src="./sreeya sewu.png"
                    className="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                  Program pelatihan di AgriFuture sangat membantu saya dalam memahami dunia pertanian modern. Melalui pembelajaran yang praktis dan relevan, saya mendapatkan wawasan yang mendalam tentang teknologi pertanian terbaru. Pengalaman ini membuka jalan bagi karir yang lebih cerah di industri pertanian.
                </p>
                <div className="flex flex-col items-center">
                  <img src="./User Thumb.png" alt="user1" className="w-10 h-10 flex justify-center items-center gap-2"/>
                  <p className="text-lg font-bold ">Aurel</p>
                  <p>Agricultural engineer</p>
                </div>
                
              </div>

              
              <div className="bg-white shadow-md rounded-lg mb-6 md:mb-0 px-6 py-8">
                <div className="mb-6 flex justify-center ">
                  <img
                    src="./Pt angkasa 1.png"
                    className="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                  Berkat AgriFuture, saya mendapatkan keterampilan baru yang sangat berharga dan kesempatan untuk bekerja di perusahaan pertanian ternama. Saya merasa lebih percaya diri untuk berkontribusi di sektor ini dengan pengetahuan yang saya dapatkan.
                </p>
                <div className="flex flex-col items-center">
                  <img src="./User Thumb.png" alt="user1" className="w-10 h-10 flex justify-center items-center gap-3"/>
                  <p className="text-lg font-bold ">Rafly</p>
                  <p>Agricultural engineer</p>
                </div>
              </div>
            </div>
          </div>
            
        </section>
        

        <div className="space-y-4 flex flex-col items-center justify-center mx-auto text-center mb-10">
          <div className=" md:max-w-xl lg:max-w-3xl mt-16">
            <h2 className="text-3xl font-bold">Frequently Asked questions</h2>
            <h1 className="text-4xl font-bold">Jawaban Dari Pertanyaan Anda</h1>
          </div>
          <Faq name="Apa itu AgriFuture?" />
          <Faq name="Bagaimana cara bergabung di AgriFuture?" />
          <Faq name="Siapa yang dapat menggunakan layanan Agrifuture?" />
          <Faq name="Apa keuntungan bergabung dengan Agrifuture?" />
          <Faq name="Bagaimana cara menghubungi tim dukungan pelanggan Agrifuture?" />
          
        </div>

        <Footer></Footer>
      </>

    )
}

export default LandingSatu