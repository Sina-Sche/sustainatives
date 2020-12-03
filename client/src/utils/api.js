export async function getProducts() {
  const result = await fetch("http://localhost:7001/products/");
  const products = result.json();
  return products;
}
