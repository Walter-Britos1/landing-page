import axios from 'axios';

const URL = 'www.themealdb.com/api/json/v1/1/categories.php';

export const handleMeal = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching meals:', error.message);
  }
};