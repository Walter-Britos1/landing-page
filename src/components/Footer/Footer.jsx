import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';

export default function Footer() {
  return (
    <footer className='bg-black bg-opacity-90 text-white mt-20 py-10'>
      <div className='container mx-auto mt-10 px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center mb-6 space-y-6 md:space-y-0 md:space-x-10'>
          {/* Contacto y Dirección */}
          <div className='text-center md:text-left md:w-1/3'>
            <div className='mb-10'>
              <p className='font-bold font-sans'>Hours</p>
              <span className='block'>Monday - Friday: 9:00 AM - 9:00 PM</span>
              <span className='block'>Saturday: 10:00 AM - 8:00 PM</span>
              <span className='block'>Sunday: Closed</span>
            </div>
            <div>
              <button className='bg-transparent border border-white rounded-full py-2 px-4 text-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300'>
                ORDERS
              </button>
            </div>
          </div>
          
          {/* Título */}
          <div className='md:w-1/3 flex flex-col items-center'>
            <h3 className='text-2xl font-bold mt-6 md:mt-0 font-sans'>Delicius Food</h3>
          </div>

          {/* Sucursales */}
          <div className='text-center md:text-left md:w-1/3'>
            <div className='mb-10 md:ml-10'>
              <p className='font-bold font-sans'>Contact Us</p>
              <span className='block'>+52-1-33-12345678</span>
              <span className='block'>deliciusfood@gmail.com</span>
            </div>
            <div className='mb-6 md:ml-10'>
              <p className='font-bold font-sans'>Direction</p>
              <span className='block'>La Plata 1900, Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
        
        {/* Iconos de Redes Sociales */}
        <div className='flex justify-center mb-16'>
          <img src={facebookIcon} alt="Facebook" className='w-8 h-8 mr-4 cursor-pointer hover:opacity-75' />
          <img src={instagramIcon} alt="Instagram" className='w-8 h-8 cursor-pointer hover:opacity-75' />
        </div>

        {/* Derechos Reservados y Políticas */}
        <div className='flex flex-col md:flex-row justify-center items-center text-xs mb-2 space-y-4 md:space-y-0 md:space-x-10'>
          <p className='text-center md:text-left'>© 2024 Delicius Food. All rights reserved.</p>
          <div className='flex space-x-4'>
            <a href="#" className='hover:text-gray-400'>Privacy Policy</a>
            <a href="#" className='hover:text-gray-400'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
