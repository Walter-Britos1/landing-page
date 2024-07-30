import soupIcon from '../../assets/soup.svg';
import noodleIcon from '../../assets/noodles.svg';
import dumplingsIcon from '../../assets/dumplings.svg';

export default function InfoSection() {
  return (
    <div className='bg-white mt-10 mb-10 py-12 px-4 md:px-8'>
      {/* Contenedor para el carrusel en móviles */}
      <div className='block md:hidden overflow-x-auto snap-x snap-mandatory'>
        <div className='flex flex-nowrap space-x-4 p-4'>
          <div className='text-center p-4 flex-shrink-0 w-full snap-center'>
            <img src={soupIcon} alt='Soup' className='mx-auto mb-4 w-16 h-16 md:w-24 md:h-24' />
            <h2 className='text-2xl font-bold font-sans'>Sopas</h2>
            <p className='text-sm'>Tazones de sabores interminables de Oriente</p>
          </div>
          <div className='text-center p-4 flex-shrink-0 w-full snap-center'>
            <img src={noodleIcon} alt='Noodles' className='mx-auto mb-4 w-16 h-16 md:w-24 md:h-24' />
            <h2 className='text-2xl font-bold font-sans'>Noodles</h2>
            <p className='text-sm'>La forma en que los noodles deben ser</p>
          </div>
          <div className='text-center p-4 flex-shrink-0 w-full snap-center'>
            <img src={dumplingsIcon} alt='Dumplings' className='mx-auto mb-4 w-16 h-16 md:w-24 md:h-24' />
            <h2 className='text-2xl font-bold font-sans'>Dumplings</h2>
            <p className='text-sm'>Todo es cuestión del relleno, y la masa</p>
          </div>
        </div>
      </div>
      {/* Contenedor para la disposición normal en pantallas grandes */}
      <div className='hidden md:flex flex-wrap justify-around items-center'>
        <div className='text-center p-4'>
          <img src={soupIcon} alt='Soup' className='mx-auto mb-4 w-16 h-16 md:w-24 md:h-24' />
          <h2 className='text-2xl font-bold font-sans'>Sopas</h2>
          <p className='text-sm'>Tazones de sabores interminables de Oriente</p>
        </div>
        <div className='text-center p-4'>
          <img src={noodleIcon} alt='Noodles' className='mx-auto mb-4 w-16 h-16 md:w-24 md:h-24' />
          <h2 className='text-2xl font-bold font-sans'>Noodles</h2>
          <p className='text-sm'>La forma en que los noodles deben ser</p>
        </div>
        <div className='text-center p-4'>
          <img src={dumplingsIcon} alt='Dumplings' className='mx-auto mb-4 w-16 h-16 md:w-24 md:h-24' />
          <h2 className='text-2xl font-bold font-sans'>Dumplings</h2>
          <p className='text-sm'>Todo es cuestión del relleno, y la masa</p>
        </div>
      </div>
    </div>
  );
}
