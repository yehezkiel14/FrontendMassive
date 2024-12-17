import React from "react";

function Layanan() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Layanan <span className="text-third">AgriFuture</span></h1>
                <p className="text-lg mt-4">AgriFuture menawarkan berbagai layanan yang dirancang untuk memenuhi kebutuhan edukasi dan karir di bidang pertanian.</p>
            </div>
            <div className="w-[75rem] flex flex-col mx-auto mt-10 gap-6 mb-16"> {/* Menambahkan mb-16 untuk memberikan jarak ke bawah */}

                <article className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img
                            alt="edukasi"
                            src="./edukasi.png"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <a href="#">
                                <h3 className="font-bold uppercase text-gray-900">
                                    Edukasi Pertanian
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                Pelajari teknik pertanian modern dengan artikel, blog, video, dan E-Book gratis dari sumber terpercaya. Dapatkan pengetahuan praktis dalam berbagai aspek pertanian, mulai dari teknologi hingga manajemen lahan yang berkelanjutan.
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                            >
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </article>

                <article className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img
                            alt="pekerjaan"
                            src="./pekerjaan.png"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <a href="#">
                                <h3 className="font-bold uppercase text-gray-900">
                                    Lowongan Pekerjaan
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                Temukan peluang karir di berbagai sektor pertanian. Kami menghadirkan daftar lowongan pekerjaan dari berbagai perusahaan dan organisasi terkemuka di Indonesia.
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                            >
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </article>

                <article className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img
                            alt="komunitas"
                            src="./komunitas.png"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <a href="#">
                                <h3 className="font-bold uppercase text-gray-900">
                                    Komunitas & Diskusi
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                Bergabunglah dalam komunitas petani, dan profesional lainnya untuk berdiskusi, bertukar pengalaman, dan membangun jejaring. Temukan solusi inovatif dari rekan-rekan di seluruh Indonesia!
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                            >
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default Layanan;
