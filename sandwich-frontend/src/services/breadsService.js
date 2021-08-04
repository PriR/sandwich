import axios from "axios";

const removeBreadStock = async (id, quantity) => {
  console.log("removeBreadStock id: ", id);
  const body = { quantity: quantity, action: "REMOVE" };
  const response = await axios.put(
    `http://localhost:8080/ingredients/breads/${id}`,
    body
  );
  return response.data;
};

const addBreadStock = async (id, quantity) => {
  const body = { quantity: quantity, action: "ADD" };
  const response = await axios.put(
    `http://localhost:8080/ingredients/breads/${id}`,
    body
  );
  return response.data;
};

const getBreadsStock = async () => {
  const response = await axios.get(`http://localhost:8080/ingredients/breads`);
  return response.data;
};

export { removeBreadStock, addBreadStock, getBreadsStock };
