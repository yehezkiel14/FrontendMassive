import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {jobs.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase">Title</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase">Company</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase">Location</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase">Requirements</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase">Description</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.JobID}>
                <td className="py-2 px-4 border-b border-gray-200">{job.Title}</td>
                <td className="py-2 px-4 border-b border-gray-200">{job.Company}</td>
                <td className="py-2 px-4 border-b border-gray-200">{job.Location}</td>
                <td className="py-2 px-4 border-b border-gray-200">{job.Requirements}</td>
                <td className="py-2 px-4 border-b border-gray-200">{job.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs have been added yet.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
