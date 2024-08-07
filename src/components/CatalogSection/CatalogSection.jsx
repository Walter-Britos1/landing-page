import Card from '../Card/Card';
import { useMeals } from '../../api/mealApi';
import Loading from '../Loading/Loading';

export default function CatalogSection() {
  const { categories, loading, error } = useMeals();

  if (loading) {
    return(
      <div className='bg-black bg-opacity-90 mb-[-80px] py-8'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-6 text-white text-center font-sans'>Our Menu</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 8 }).map((_, index) => (
              <Loading key={index} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div className='flex justify-center items-center h-screen text-red-500'>Error: {error.message}</div>;
  }

  return (
    <div className='bg-black bg-opacity-90 mb-[-80px] py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-6 text-white text-center font-sans'>Our Menu</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {categories.map((item) => (
            <Card
              key={item.idCategory}
              category={item.strCategory}
              thumb={item.strCategoryThumb}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
