import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import logoContainer from "../assets/arture.png";

const Navbar2 = () => { 
    // State untuk mengecek status login
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return ( 
        <div className="navbar flex items-center py-4 px-20 gap-6"> 
            <div className="logo flex flex-col items-start gap-2 flex-1"> 
                <Link to="/"><img src={logoContainer} alt="logo arture" className="w-[8.6875rem] h-[2.22013rem]" /></Link>
            </div> 
            <nav className="flex justify-center items-center gap-4"> 
                <ul className="flex gap-4">
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/edukasi">Edukasi</Link></li> 
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/pekerjaan">Pekerjaan</Link></li> 
                    <li className="transition duration-300 ease-in-out hover:text-yellow-600"><Link to="/diskusi">Diskusi</Link></li>
                </ul> 
            </nav> 
            <div className="flex h-12 justify-end gap-4 flex-1"> 
                <Link to="/akun">Akun</Link> 
            </div> 
        </div> 
    ); 
};

export default Navbar2;