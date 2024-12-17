import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobTable = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/jobs");
      console.log('Fetched jobs:', response.data); // Debugging line
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  

  const deleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-end mb-3">
        <Link to={`/job-form`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add New Job
        </Link>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">No</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Title</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Company</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Location</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Requirements</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Description</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job.JobID} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{job.Title}</td>
              <td className="py-2 px-4 border-b border-gray-200">{job.Company}</td>
              <td className="py-2 px-4 border-b border-gray-200">{job.Location}</td>
              <td className="py-2 px-4 border-b border-gray-200">{job.Requirements}</td>
              <td className="py-2 px-4 border-b border-gray-200">{job.Description}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <Link
                  to={`/job-edit/${job.JobID}`}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJob(job.JobID)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
