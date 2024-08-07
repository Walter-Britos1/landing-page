export default function Loading() {
  return (
    <div className='bg-opacity-0 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105'>
      <div className='w-full h-48 bg-gray-300 animate-shimmer bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[length:200%_100%]'></div>
      <div className='p-4'>
        <div className='h-6 bg-gray-300 rounded mb-2 w-1/2 animate-shimmer bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[length:200%_100%]'></div>
      </div>
    </div>
  )
}
