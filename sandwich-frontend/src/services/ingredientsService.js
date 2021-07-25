import axios from 'axios';
import { ingredientsNamesId } from './ingredientsNameId';

const getIngredients = async (ingredientType) => {
  try {
    const response = await axios.get(`http://localhost:8080/ingredients?types=${ingredientType}`);
    return response.data;
  } catch (e) {
    console.log("e: ", e);
  }
}

const removeStock = async (id, quantity) => {
  const body = {quantity: quantity, action: 'REMOVE'};
  try {
    const response = await axios.put(`http://localhost:8080/ingredients/${id}`, body);
    return response.data;
  } catch (e) {
    console.log("e: ", e);
  }
}

const addStock = async (name, quantity) => {
  const id = ingredientsNamesId[name];
  const body = {quantity: quantity, action: 'ADD'};
  try {
    const response = await axios.put(`http://localhost:8080/ingredients/${id}`, body);
    return response.data;
  } catch (e) {
    console.log("e: ", e);
  }
}

export { getIngredients, removeStock, addStock }
