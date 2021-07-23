const getFormattedPrice = (price, quantity) => {
  if (quantity === 0) {
    return "Out of stock";
  }
  return `$${price.toFixed(2)}`;
};

export { getFormattedPrice }