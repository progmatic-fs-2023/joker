export default function sumPriceCalc(array) {
  const result = array.reduce(
    (sum, currentItem) => sum + currentItem.unitPrice * currentItem.quantity,
    0,
  );
  return result;
}
