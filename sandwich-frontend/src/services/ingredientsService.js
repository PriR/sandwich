import axios from 'axios';

const getIngredients = async (ingredientType) => {
  const response = await axios.get(`http://localhost:8080/ingredients?types=${ingredientType}`);
  return response.data;
}

export { getIngredients }
