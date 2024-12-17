import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users`);
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul className="list-disc pl-6">
        {users.map(user => (
          <li key={user.UserID}>{user.FullName} ({user.Email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
