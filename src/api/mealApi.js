import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const useMeals = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(URL);
        setCategories(response.data.categories);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return { categories, loading, error };
};

