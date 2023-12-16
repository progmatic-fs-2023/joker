export default function uniqueKeyGenerator() {
  const date = new Date().getTime();
  return date + Math.random() * 1000;
}
