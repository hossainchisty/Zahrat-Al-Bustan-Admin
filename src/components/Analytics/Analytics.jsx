/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from 'react';
import LoadingIndicator from '../../shared/Loading/LoadingIndicator';
import { useCallback } from 'react';

const Analytics = () => {
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;
  const getToken = localStorage.getItem('userInfo');
  const token = getToken.replace(/["']/g, '');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statistics, setStatistics] = useState({
    totalBooks: 0,
    totalOrders: 0,
    totalUsers: 0,
    featuredBooks: 0,
  });

  const [prevTotalOrders, setPrevTotalOrders] = useState(
    statistics.totalOrders
  );
  const [prevTotalBooks, setPrevTotalBooks] = useState(statistics.totalBooks);
  const [prevFeaturedBooks, setPrevFeaturedBooks] = useState(
    statistics.featuredBooks
  );

  const fetchAnalytics = useCallback(() => {
    fetch(`${apiBaseDomain}/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStatistics({
          totalOrders: data.data.total_orders,
          totalBooks: data.data.total_books,
          totalUsers: data.data.total_users,
          featuredBooks: data.data.featured_books,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [apiBaseDomain, token]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  const analyticsCards = useMemo(() => {
    return (
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {/* Analytics Card 3: Total Customer */}
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            Total Customer
          </h3>
          <div className='flex items-center'>
            <p className='text-3xl font-bold text-purple-500 mr-2'>
              {statistics.totalOrders}
            </p>
            {statistics.totalOrders > prevTotalOrders ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-green-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-red-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </div>
        </div>
        {/* Analytics Card 1: Total Reservations  */}
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            Total Reservations
          </h3>
          <div className='flex items-center'>
            <p className='text-3xl font-bold text-blue-500 mr-2'>
              {statistics.totalBooks}
            </p>
            {statistics.totalBooks > prevTotalBooks ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-green-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-red-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </div>
        </div>
        {/* Analytics Card 3:  Total Menu */}
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            Total Menu
          </h3>
          <div className='flex items-center'>
            <p className='text-3xl font-bold text-yellow-500 mr-2'>
              {statistics.featuredBooks}
            </p>
            {statistics.featuredBooks > prevFeaturedBooks ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-green-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-red-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  }, [statistics]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return analyticsCards;
};

export default Analytics;
