import React from "react";
import Pertanyaan from "../components/Pertanyaan";
import Navbar2 from "../components/Navbar2";

const DiskusiPage = () => {
    return (
        <>
            <Navbar2></Navbar2>
            <div className="w-[75rem] mx-auto flex flex-col items-center justify-center rounded-lg mt-10">
                <Pertanyaan />
            </div>
        </>
        
    );
};

export default DiskusiPage;