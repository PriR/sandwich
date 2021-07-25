const getFormattedPrice = (price, quantity) => {
  // console.log("current: ", current);
  if (quantity === 0) {
    return "Out of stock";
  }
  return `$${price.toFixed(2)}`;
};

export { getFormattedPrice }