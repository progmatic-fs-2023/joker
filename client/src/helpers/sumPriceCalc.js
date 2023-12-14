export const sumPriceCalc = (array) => {
  return array.reduce(
    (sum, currentItem) => sum + currentItem?.unitPrice * currentItem?.quantity,
    0,
  );
};
