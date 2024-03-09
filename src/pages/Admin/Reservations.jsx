/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// import copyToClipboard from '../../utils/copyToClipboard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCheck,
//   faClipboard,
//   faTimes,
// } from '@fortawesome/free-solid-svg-icons';
// import toast from 'react-hot-toast';

const Reservations = () => {
  // Retrieve the token from local storage
  // const [updatedStatusMap, setUpdatedStatusMap] = useState({});

  const getToken = localStorage.getItem('userInfo');
  const token = getToken.replace(/["']/g, '');
  const [reservation, setReservation] = useState([]);
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;
  // Function to format date string to "YYYY-MM-DD" format
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    fetch(`${apiBaseDomain}/reservation/overview/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((reservation) => {
        // Format date strings to "YYYY-MM-DD" format
        const formattedReservation = reservation.data.map((data) => ({
          ...data,
          date: formatDate(data.date),
          createdAt: formatDate(data.createdAt),
        }));
        console.log(formattedReservation);
        setReservation(formattedReservation);
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
      });
  }, []);

  return (
    <div className='flex flex-col m-5 pt-10 px-5'>
      <h3 className='font-bold mb-5 text-gray-800'>Reservation Management</h3>
      <div className='overflow-x-auto'>
        <table className='min-w-max divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Full Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Phone Number
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Time
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Guests
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Used Code
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Offer
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Booked At
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {reservation.map((data) => (
              <tr key={data._id}>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.full_name}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.email}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>
                    {data.phone_number}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.date}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.time}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 text-center'>
                    {data.guests}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.promoCode}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 text-center'>
                    {data.offer}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.status}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{data.createdAt}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-2'>
                  <button className='text-indigo-600 hover:text-indigo-900'>
                    Edit
                  </button>
                  <button className='text-red-600 hover:text-red-900'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
