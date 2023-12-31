export const sumPriceCalc = (array) => {
  const result = array.reduce(
    (sum, currentItem) => sum + currentItem.price * currentItem.quantity,
    0,
  );
  return result;
};

export const sumQuantityCalc = (array) => {
  const result = array.reduce((sum, currentItem) => sum + currentItem.quantity, 0);
  return result;
};
