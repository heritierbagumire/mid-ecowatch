"use client";
import Loading from '@/components/Loading.logo.component';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login'); // Redirect if not authenticated
      return; // Exit the effect early if not authenticated
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://mid-ecowatch-backend.onrender.com/client/all');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        const allUsers = data.map((user: {}, index: number) => ({
          ...user,
          numericalId: index + 1,
        }));
        setUsers(allUsers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false when the fetch is done
      }
    };

    fetchUsers(); // Call the fetch function
  }, [router]);

  if (loading) {
    return <Loading />; // Show a loading spinner while loading
  }

  return (
    <div className="container px-[10%]">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-2 ">ID</th>
            <th className="px-4 py-2 border-2 ">Name</th>
            <th className="px-4 py-2 border-2 ">Email</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="">
              <td className="border px-4 py-2">{user.numericalId}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
