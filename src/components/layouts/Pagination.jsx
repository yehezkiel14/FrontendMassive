import React from "react";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
    <div className="flex justify-center space-x-2 mt-4">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded">Previous</button>
      {[...Array(totalPages)].map((_, index) => (
        <button key={index} onClick={() => onPageChange(index + 1)} className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>{index + 1}</button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-200 rounded">Next</button>
    </div>
  )
}

export default Pagination