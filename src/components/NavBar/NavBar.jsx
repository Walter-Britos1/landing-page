import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../public/logo.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-black bg-opacity-95 text-white py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <Link to='/' className='hover:text-gray-400 flex items-center' onClick={handleLinkClick}>
            <img 
              src={logo} 
              alt='logo' 
              className='w-16 h-auto md:w-24 mr-2' 
            />
            <span className='text-2xl font-bold hidden md:block'>
              Delicious Food
            </span>
          </Link>
        </div>
        <div className='hidden md:flex space-x-4'>
          <Link to='/' className='hover:text-gray-400'>
            HOME
          </Link>
          <Link to='/catalog' className='hover:text-gray-400'>
            CATALOG
          </Link>
          <Link to='/contact' className='hover:text-gray-400'>
            CONTACT
          </Link>
        </div>
        <button
          className='md:hidden text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className='flex flex-col items-center space-y-4 mt-4'>
          <Link to='/' className='hover:text-gray-400' onClick={handleLinkClick}>
            HOME
          </Link>
          <Link to='/catalog' className='hover:text-gray-400' onClick={handleLinkClick}>
            CATALOG
          </Link>
          <Link to='/contact' className='hover:text-gray-400' onClick={handleLinkClick}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
