export default function Card({ category, thumb }) {
  return (
    <div className='bg-white rounded-lg mb-[-10px] shadow-lg overflow-hidden transform transition duration-500 hover:scale-105'>
      <img src={thumb} alt={category} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>{category}</h2>
      </div>
    </div>
  );
}
