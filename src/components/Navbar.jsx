import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import logoContainer from "../assets/arture.png";

const Navbar = () => { 
    // State untuk mengecek status login
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return ( 
        <div className="navbar flex items-center py-4 px-20 gap-6"> 
            <div className="logo flex flex-col items-start gap-2 flex-1"> 
                <Link to="/"><img src={logoContainer} alt="logo arture" className="w-[8.6875rem] h-[2.22013rem]" /></Link>
            </div> 
            <nav className="flex justify-center items-center gap-4"> 
                <ul className="flex gap-4">
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/">Beranda</Link></li>
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/tentang">Tentang Kami</Link></li>
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/layanan">Layanan</Link></li>
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/kontak">Kontak Kami</Link></li>
                    {isLoggedIn && (
                        <>
                            <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/edukasi">Edukasi</Link></li> 
                            <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/pekerjaan">Pekerjaan</Link></li> 
                            <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/diskusi">Diskusi</Link></li>
                        </>
                    )}
                </ul> 
            </nav> 
            <div className="flex h-12 justify-end gap-4 flex-1"> 
                {isLoggedIn ? (
                    <Link to="/akun">Akun</Link>
                ) : (
                    <>
                        <Link to="/login" className="transition duration-300 ease-in-out hover:text-yellow-600">Masuk</Link>
                        <Link to="/signup" className="transition duration-300 ease-in-out hover:text-yellow-600">Daftar</Link>
                    </>
                )}
            </div> 
        </div> 
    ); 
};

export default Navbar;
