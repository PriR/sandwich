import axios from "axios";
import { ingredientsNamesId } from "./ingredientsNameId";

const getIngredients = async (ingredientType) => {
  const response = await axios.get(`http://localhost:8080/ingredients?types=${ingredientType}`);
  return response.data;
};

const removeStock = async (id, quantity) => {
  const body = { quantity: quantity, action: "REMOVE" };
  const response = await axios.put(
    `http://localhost:8080/ingredients/${id}`,
    body
  );
  return response.data;
};

const addStock = async (name, quantity) => {
  const id = ingredientsNamesId[name];
  const body = { quantity: quantity, action: "ADD" };
  const response = await axios.put(
    `http://localhost:8080/ingredients/${id}`,
    body
  );
  return response.data;
};

const getIngredientsStock = async () => {
  const response = await axios.get(`http://localhost:8080/ingredients`);
  return response.data;
};

export { getIngredients, removeStock, addStock, getIngredientsStock };
