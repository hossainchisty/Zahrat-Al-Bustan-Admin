import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='mb-4'>
      <ul className='flex flex-wrap justify-center sm:justify-end gap-2'>
        <li>
          <Link
            to='/customers'
            className='inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out'
          >
            Customers
          </Link>
        </li>
        <li>
          <Link
            to='/reservations'
            className='inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out'
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to='/chefs'
            className='inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out'
          >
            Chefs
          </Link>
        </li>
        <li>
          <Link
            to='/feedback'
            className='inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out'
          >
            Feedback
          </Link>
        </li>
        <li>
          <Link
            to='/add/menu'
            className='inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out'
          >
            Add Menu
          </Link>
        </li>
        <li>
          <Link
            to='/add/chef'
            className='inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out'
          >
            Add Chef
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
